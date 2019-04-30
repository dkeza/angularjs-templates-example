var gulp  = require('gulp');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var del = require('del');

gulp.task('delete_all', function() {
  return del([
    'public/*.*',
    'public/css/*.*',
    'public/images/*.*',
    'public/js/*.*',
    'public/templates/*.*'
  ]);
});

gulp.task('minify', function(){
  return gulp.src('index.html')
          .pipe(useref())
          .pipe(gulpif('*.js', uglify()))
          .pipe(gulpif('*.css', minifyCss()))
          .pipe(gulp.dest('public'));
});

gulp.task('copy1', function () {
    return gulp.src('templates/*.*')
        .pipe(gulp.dest('public/templates'));
});

gulp.task('copy2', function () {
  return gulp.src('images/*.*')
      .pipe(gulp.dest('public/images'));
});

gulp.task('default', gulp.series('delete_all', 'minify', 'copy1', 'copy2'));
