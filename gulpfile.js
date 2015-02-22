'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Watch Files For Changes & Reload
gulp.task('serve', function () {
    browserSync({
        notify: false,
        server: {
            baseDir: ['src'],
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });

    gulp.watch(['src/*.html'], reload);
    gulp.watch(['src/*.js', 'src/**/*.js'], [reload]);
    gulp.watch(['app/images/**/*'], reload);
});
