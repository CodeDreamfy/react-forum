'use strict';

var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var clean        = require('gulp-clean');
var copy         = require('gulp-copy');
var less         = require('gulp-less');
var watch        = require('gulp-watch');
var react        = require('gulp-react');

var path         = require('path');

var version      = 'v' + require('./package.json').version;

gulp.task('clean', function () {
  return gulp.src(['static/dist/*'])
    .pipe(clean({force: true}));
});

gulp.task('copy', function () {
  return gulp.src(['static/src/**/*'])
    .pipe(copy('static/dist/', {prefix: 2}));
});

gulp.task('less', function () {
  return gulp.src('static/src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('static/dist/css'));
});

gulp.task('react', function () {
    return gulp.src('static/src/jsx/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('static/dist/js'));
});

gulp.task('watch', function () {
    return watch('static/src/*')
        .pipe(gulp.dest('static/dist/'));
});

gulp.task('default', gulpSequence('clean', 'copy', ['less', 'react']));
gulp.task('dev', ['default', 'watch']);
gulp.task('build', ['default']);
