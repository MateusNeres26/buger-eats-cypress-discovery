const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    projectId: "k8tj8g",
      viewportWidth : 1440,
      viewportHeight : 900,
      baseUrl: 'https://buger-eats-qa.vercel.app/',
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      
    },
  },
});


