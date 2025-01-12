import LoginPage from "../pages/LoginPage";
describe('Testing Login Functionality', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
       cy.viewport(1920, 1080);
    });
    
    it('User Login with invalid credentials', () => {
        loginPage.userLogin("standard-user", "secret-sauce");
        loginPage.invalidAssertion();
    });
    
    it('User Login with valid credentials', () => {
      loginPage.userLogin("standard_user", "secret_sauce");
  });
});