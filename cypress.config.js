const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "whma4u",
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/integration/**/*',
    setupNodeEvents(on, config) {
    },
  },
});
