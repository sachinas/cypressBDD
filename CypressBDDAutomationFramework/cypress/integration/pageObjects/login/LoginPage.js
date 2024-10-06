const Utilities = require("../../../e2e/helper/utils/Utility.js");
const userData = `${Cypress.env("userId")}`;
const ReviewData = `${Cypress.env("reviewerId")}`;

class LoginPage {
  static getUserIdField(){
    return "#email-address"
  }
  static getPasswordField(){
  return "#password"
  }
  static getLoginButton(){
    return "#login"
  }



  static launchHomePageURL() {
    Utilities.navigateToUrl();
  }

  static loginOperation(loginObj) {
    var userName, password;
    switch (userData) {
      case "staging_userID":
        userName = loginObj.staging_userID;
        password = loginObj.staging_Password;
        break;
      case "production_userID":
        userName = loginObj.production_userID;
        password = loginObj.production_Password;
        break;
        
  
    }
    Utilities.inputTextField(LoginPage.getUserIdField(), userName);
    Utilities.wait(1000);
    Utilities.inputTextField(LoginPage.getPasswordField(), password);
    Utilities.wait(1000);
    Utilities.clickElement(LoginPage.getLoginButton());
    Utilities.wait(1000);
    console.log(JSON.stringify(loginObj));
  }




  


}

export default LoginPage;
