var gulp = require('gulp');
var postcss =require('gulp-postcss');
var csswring = require('csswring');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer-core');

gulp.task('styles', function() {
  var processors = [
    // csswring,
    autoprefixer({browsers:['last 2 version']}),
    cssnext({})
  ];
  return gulp.src('styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
})