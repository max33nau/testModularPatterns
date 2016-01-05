// npm install gulp gulp-mocha

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('run-tests', function() {
  return gulp.src(['./test.js'], { read: false })
    .pipe(mocha());
});

gulp.task('watch-test', function() {
  gulp.watch(['./name.js', './test.js'], ['run-tests']);
})

gulp.task('default', ['run-tests']);
gulp.task('test', ['run-tests', 'watch-test']);
