
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');


gulp.task('sass', function () {
    return gulp.src('./WebContent/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./WebContent/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./WebContent/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['sass']);
gulp.task('build', ['sass']);