1. To initial npm--->
   mpm init -y
2. Install Cypress--->
   npm install cypress --save-dev
3. Opening Cypress--->
   npx cypress open
4. Run cypresee(headless mode to record video and creating report)
   npx cypress run
5. Cypress-mochawesome-reporter--->
   npm i --save-dev cypress-mochawesome-reporter
6. Edit Confg file--->
   const { defineConfig } = require('cypress');

   module.exports = defineConfig({
       reporter: 'cypress-mochawesome-reporter', [Add this]
       e2e: {
       setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); [Add this]
      config.specPattern = [
           [Test File list]
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e.AddToCart.cy.js'
      ]
      },
     },
   });
7. Import at e2e.js file in support folder--->
   import 'cypress-mochawesome-reporter/register';

8. If wants to add XPATH manually install xpath dependencies first--->
   npm i cypress-xpath [deprecated now, find something new].




