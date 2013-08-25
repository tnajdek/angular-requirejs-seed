module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['ng-scenario'],
    files: [
      'test/e2e/**/*.js'
    ],

    autoWatch: true,

    browsers: ['Firefox'],

    singleRun: false,

    proxies: {
      '/': 'http://localhost:8000/'
    },

    urlRoot: "__karma__",

    junitReporter: {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }
  });
};
