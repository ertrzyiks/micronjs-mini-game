'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('traceur', function () {
    return gulp.src('src/minigame.js')
        .pipe($.traceur())
        .pipe($.rename('minigame-compiled.js'))
        .pipe(gulp.dest('src'));
});

// Watch Files For Changes & Reload
gulp.task('serve', ['traceur'], function () {
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
    gulp.watch(['src/minigame.js'], ['traceur', reload]);
    gulp.watch(['app/images/**/*'], reload);
});
