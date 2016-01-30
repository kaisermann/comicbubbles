'use strict';

// Globals
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var name = "cbubble";

// Tasks

gulp.task('build', function () 
{
	return gulp.src(['./src/*.styl','!./src/page.styl'])
	.pipe($.stylus())
	.pipe($.rename(name+'.css'))
	.pipe($.size())
	.pipe(gulp.dest('./dist/'));
});

gulp.task('buildPageFile', function () 
{
	return gulp.src('./src/page.styl')
	.pipe($.stylus({compress:true}))
	.pipe($.rename('page.css'))
	.pipe($.size())
	.pipe(gulp.dest('./'));
});

gulp.task('minify', ['build'], function () 
{
	return gulp.src(['./dist/*.css','!./dist/*.min.css'])
	.pipe($.cssmin())
	.pipe($.rename({suffix: '.min'}))
	.pipe($.size())
	.pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function() 
{
	gulp.watch(['src/*.styl'], ['build', 'buildPageFile', 'minify']);
});

gulp.task('default', ['build', 'minify']);