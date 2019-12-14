const 	gulp 			= require('gulp'),
		sass 			= require('gulp-sass');

function preSass(){
	return gulp.src('app/sass/*.sass')
		.pipe(sass({
			sourceMap: true,
			errLogToConsole: true
		}).on('error', sass.logError))
		.pipe(gulp.dest('app/css/'))

}

gulp.task ('sass', preSass);