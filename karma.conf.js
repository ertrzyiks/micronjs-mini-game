// Karma configuration
// Generated on Thu Oct 31 2013 21:01:33 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine', 'requirejs', 'traceur'],

        preprocessors: {
            'src/**/*.js': ['traceur'],
            'spec/*Spec.js': ['traceur']
        },

        files: [
            {pattern: 'node_modules/micronjs/build/base.js', included: true},
            {pattern: 'node_modules/micronjs/build/micron.js', included: true},
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'spec/**/*Spec.js', included: false},
            'spec/main.js'
        ],

        exclude: [],

        traceurPreprocessor: {
            options: {
                sourceMap: true,
                modules: 'amd',
                annotations: true,
                types: true
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // web server port
        port: 9876,

        autoWatch: false,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],

        sauceLabs: {
            testName: 'MicronJS mini game'
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-sauce-launcher',
            'karma-requirejs',
            'karma-traceur-preprocessor',
            'karma-jasmine'
        ],

        captureTimeout: 60000,

        singleRun: true
    });
};
