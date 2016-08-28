var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
  console.log('I am about to learn the essentials of React.js');
  return browserify('./source/app.js')
         .transform(babelify) 
         .bundle()
         .pipe(source('build.js'))
         .pipe(gulp.dest('./build/'));
});
