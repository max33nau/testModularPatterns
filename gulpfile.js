// npm install gulp gulp-mocha
"use strict";
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('run-tests', function() {
  return gulp.src(['./test/testName.js'], { read: false })
    .pipe(mocha());
});

gulp.task('watch-test', function() {
  gulp.watch(['./*.js', './test/testName.js'], ['run-tests', 'lint']);
});

gulp.task('lint', function() {
  return gulp.src(['./*.js','./test/testName.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['run-tests']);
gulp.task('test', ['run-tests', 'watch-test','lint']);
