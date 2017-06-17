'use strict';
var gulp  = require('gulp'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {

    browserSync.init({
        server: './public/'

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
    return gulp.src('./public/static/js/*.js')
        .pipe(gulp.dest('./dist/static/js'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
    return gulp.src('./public/static/css/*.css')
        .pipe(gulp.dest('./dist/static/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('./public/static/img/*.png')
        .pipe(gulp.dest('./dist/static/img'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'html', 'scripts', 'styles', 'images']);
