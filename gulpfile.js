var gulp = require('gulp');
var postcss =require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  var processors = [
    csswring
  ];
  return gulp.src('styles.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.scss', ['styles']);
})