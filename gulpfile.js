'use strict'

let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    concat = require('gulp-concat');

// live reload
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
});

// html
gulp.task('html', function(){
    return gulp.src('src/pug/pages/**/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

// css
gulp.task('css', function(){
    return gulp.src('src/scss/**/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// js
gulp.task('js', function(){
    return gulp.src([
        'src/js/jquery.js',
        'src/js/slick.js',
        'src/js/magnific-popup.js',
        'src/js/script.js'
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

// images
gulp.task('img', function(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});


// fonts
gulp.task('font', function(){
    return gulp.src('src/fonts/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
    return spriteData.pipe(gulp.dest('src/img'));
  });

// Watch
gulp.task('watch', function () {
    gulp.watch('src/pug/**/**/*.pug', ['html']);
    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});

// default
gulp.task('default', ['browser-sync', 'html', 'css', 'js', 'img', 'font', 'watch' ]);