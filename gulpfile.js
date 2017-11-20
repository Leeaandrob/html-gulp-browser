'use strict';
var gulp  = require('gulp'),
    browserify = require('browserify'),
    count = require('gulp-count'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {

    browserSync.init({
        server: './dist/'

    });

    gulp.watch('./public/*.html', ["html"]);
    gulp.watch('./public/static/js/*.js', ["scripts"]);
    gulp.watch('./public/static/css/*.css', ["styles"]);
    gulp.watch('./public/static/img/*.png', ["images"]);

});


gulp.task('html', function() {
    return gulp.src('./public/index.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());

});

gulp.task('scripts', function() {
    return gulp.src([
        './public/static/js/*.js',
    ])
        .pipe(count('## js-files selected'))
        .pipe(concat('player.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/static/js'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
    return gulp.src('./public/static/css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('player.min.css'))
        .pipe(gulp.dest('./dist/static/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('./public/static/img/*.png')
        .pipe(gulp.dest('./dist/static/img'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'html', 'scripts', 'styles', 'images']);
