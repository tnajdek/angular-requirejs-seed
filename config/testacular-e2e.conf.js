basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Firefox'];

singleRun = true;

proxies = {
  '/': 'http://localhost:8000/'
};

urlRoot = "__testacular__";

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
