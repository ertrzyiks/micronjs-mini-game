'use strict';

var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var es6ify = require('es6ify');
var browserify = require('browserify');
var karma = require('karma').server;
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
    gulp.watch(['src/*.js', 'src/**/*.js'], reload);
});

gulp.task('clean', function (cb) {
    del([
        'dist/',
    ], cb);
});

gulp.task('images', function () {
    return gulp
        .src('src/img/**', { base: 'src/'})
        .pipe(gulp.dest('dist/'))
        .pipe($.size({title: 'images'}));
});

gulp.task('html', function () {
    var assets = $.useref.assets({ searchPath: '.' });

    return gulp
        .src('src/index.html', { base: 'src/' })
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist/'))
        .pipe($.size({title: 'html'}));

});

gulp.task('browserify', function () {
    return browserify({ debug: true })
        .add(es6ify.runtime)
        .transform(es6ify)
        .require(require.resolve('./src/minigame.js'), { entry: true })
        .bundle()
        .pipe(fs.createWriteStream('dist/minigame.js'));
});

gulp.task('browserify:specs', function () {
    return browserify({ debug: true })
        .add(es6ify.runtime)
        .transform(es6ify)
        .require(require.resolve('./spec/player.js'), { entry: true })
        .bundle()
        .pipe(fs.createWriteStream('./spec/compiled/player.js'));
});

gulp.task('karma:local', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('karma:remote', function (done) {
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Windows 7',
            version: '35'
        }
    };

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        reporters: ['dots', 'saucelabs']
    }, done);
});

gulp.task('default', function () {
    runSequence(
        'clean',
        ['images', 'html'],
        'browserify'
    );
});

gulp.task('test:local', ['karma:local']);
gulp.task('test:remote', ['karma:remote']);
