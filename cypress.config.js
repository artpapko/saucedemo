const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/integration/**/*.{js,ts}',
    setupNodeEvents(on, config) {
    },
  },
});
