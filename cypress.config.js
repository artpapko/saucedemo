const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dk1uax",
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/integration/**/*',
    setupNodeEvents(on, config) {
    },
  },
});
