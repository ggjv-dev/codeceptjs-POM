exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      timeout: 60000,
      browser: 'chromium',
      windowSize: '1920x1080',
      chromium: {
        args: [
          '--start-maximized'
        ]
      }
    }
  },
  include: {
    I: './steps_file.js',
    HomePage: './pages/home.js',
  },
  mocha: {},
  mochaOpts: {
    timeout: 60000,
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    "allure": {
      outputDir: 'allure-results',
      "enabled": true
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 60000,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 60000
  },
  {
    pattern: 'amOnPage',
    timeout: 60000
  }
  ],
  tests: './*_test.js',
  name: 'CodeceptJS'
}