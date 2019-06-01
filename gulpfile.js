var gulp = require('gulp');
var sass = require('gulp-sass');

/* sass tasks */
gulp.task('sass', function () {
	return gulp.src('app/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app/css/'));
});
gulp.task('watch', function () {
	gulp.watch('app/scss/*.scss', gulp.series('sass'));
});

