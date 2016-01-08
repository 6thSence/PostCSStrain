var gulp = require('gulp');
var postcss =require('gulp-postcss');
var csswring = require('csswring');
var stylus = require('gulp-stylus');

gulp.task('styles', function() {
  var processors = [
    csswring
  ];
  return gulp.src('styles.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.styl', ['styles']);
})