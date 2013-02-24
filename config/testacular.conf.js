basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  {pattern: 'app/js/*.js', included: false},
  {pattern: 'app/js/**/*.js', included: false},
  {pattern: 'test/unit.js', included: false},
  {pattern: 'test/unit/*.js', included: false},
  {pattern: 'test/unit/**/*.js', included: false},
  {pattern: 'test/lib/**/*.js', included: false},
  // needs to be last https://github.com/testacular/testacular/wiki/RequireJS
  'test/main-test.js'
];

autoWatch = true;

LogLevel = LOG_DEBUG;

browsers = ['Firefox'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
