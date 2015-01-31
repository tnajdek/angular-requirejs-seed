module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      {pattern: 'app/bower_components/angular/angular.js', included: false},
      {pattern: 'app/bower_components/angular-route/angular-route.js', included: false},
      {pattern: 'app/bower_components/angular-mocks/angular-mocks.js', included: false},
      // 'app/components/**/*.spec.js',
      // 'app/view*/**/*.spec.js',
      {pattern: 'app/components/**/*.js', included: false},
      {pattern: 'app/view*/**/*.js', included: false},
      {pattern: 'app/app.js', included: false},
      'app/require-config.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine', 'requirejs'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
