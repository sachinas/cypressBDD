const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '3z4wk1',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return require('./cypress/plugins/index.js')(on,config)
    },
    // specPattern:'cypress/integration/DataQualityModule.feature'
    specPattern:'cypress/integration/*.feature'
  }
});
