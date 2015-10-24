'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  cssmin= require('gulp-minify-css'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require("gulp-rename"),
  rimraf = require('rimraf');

var path = {
  dist: 'dist/',
  src: 'src/quickcss.scss',
  watch: 'src/**/*.scss',
  clean: './dist'
};

function errorAlert(err) {
  console.log(err.toString());
  this.emit("end");
}

gulp.task('dist', function () {
  gulp.src(path.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', errorAlert))
    .pipe(prefixer({
      browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4']
    }).on('error', errorAlert))
    .pipe(gulp.dest(path.dist));
});

gulp.task('dist:min', function () {
  gulp.src(path.src)
    .pipe(sourcemaps.init().on('error', errorAlert))
    .pipe(sass({outputStyle: 'expanded'}).on('error', errorAlert))
    .pipe(prefixer({
      browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4']
    }).on('error', errorAlert))
    .pipe(cssmin().on('error', errorAlert))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.').on('error', errorAlert))
    .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function () {
  watch([path.watch], function () {
    gulp.start('dist');
    gulp.start('dist:min');
  });
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', ['dist', 'dist:min']);