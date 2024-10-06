// <reference types="Cypress" />
import LoginPage from "../pageObjects/login/LoginPage.js"
const Utilities= require("../../e2e/helper/utils/Utility.js")
const loginObj= require("../../fixtures/QA/LoginPageTestData.json")


const userData= `${Cypress.env("userId")}`
const {
    Before,
    After,
    Given,
    When,
    And
}= require('cypress-cucumber-preprocessor/steps')

beforeEach(() => {
    Utilities.setViewPort(loginObj.width,loginObj.height);
   })
/* 
********************* COMMON LOGIN FUNCTIONALITY - START ****************
*************************************************************************
*/

Given('I have logged in into the application',()=>{
    cy.clearCookies(); 
    //const data=loginObj.userTestData[`${userData}`];
    //const testcase5723=data[0].testcase5723
    LoginPage.launchHomePageURL();
    LoginPage.loginOperation(loginObj);
    //LoginPage.navigateToFlureeModuleWindow();
    Utilities.wait(5000);

})

/* 
********************* COMMON LOGIN FUNCTIONALITY - END *****************
*************************************************************************
*/


/* 
********************* Test Case:- LOGIN FUNCTIONALITY TEST - START ***********************
******************************************************************************************
*/

Given('I am on the Home Page of the application',()=>{
    cy.clearCookies();
    LoginPage.launchHomePageURL();
})

When('I enter the username and password and click on login button',()=>{
    LoginPage.loginOperation(loginObj);
    Utilities.wait(5000);
})


Then('I should be able to log into the application',()=>{
    LoginPage.validateSuccessfulLogin(loginObj);
})
/* 
********************* Test Case:- LOGIN FUNCTIONALITY TEST- END ***********************
***************************************************************************************
*/