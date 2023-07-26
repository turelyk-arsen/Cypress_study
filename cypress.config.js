const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure=true;
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:8080',
  },
});
