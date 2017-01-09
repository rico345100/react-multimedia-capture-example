var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}

gulp.task('default', () => {
	return browserify({
		entries: ['./src/app.js'],
		debug: true
	})
	.transform(babelify, { 
		presets: ["es2015", "react"],
		plugins: []
	})
	.bundle()
	.on('error', swallowError)
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./build'));
});