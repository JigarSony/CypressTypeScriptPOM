import {loginPage} from "../../pageObjects/loginPage"
let lgPage = new loginPage();

describe('Login', () => { 

    it('Invalid Username and Invalid Password', () => {
        cy.visit('https://www.saucedemo.com/')
        lgPage.addUsername('standard')
        lgPage.addPassword('secret')
        lgPage.clickLogin()
        //cy.get('#user-name').clear().type('standard');
        //loginPage.addUsername('standard');
        //cy.get('#password').clear().type('secret');
        // cy.get('#login-button').click();
    })

    it('Invalid Username and Valid Password', () => {
        // cy.get('#user-name').clear().type('standard_user');
        // cy.get('#password').clear().type('secret');
        // cy.get('#login-button').click();
        lgPage.addUsername('standard')
        lgPage.addPassword('secret_sauce')
        lgPage.clickLogin()
    })

    it('Valid Username and Invalid Password', () => {
        // cy.get('#user-name').clear().type('standard_user');
        // cy.get('#password').clear().type('secret');
        // cy.get('#login-button').click();
        lgPage.addUsername('standard_user')
        lgPage.addPassword('secret')
        lgPage.clickLogin()
    })

    it('Valid Username and Valid Password', () => {
        // cy.get('#user-name').clear().type('standard_user');
        // cy.get('#password').clear().type('secret_sauce');
        // cy.get('#login-button').click();
        lgPage.addUsername('standard_user')
        lgPage.addPassword('secret_sauce')
        lgPage.clickLogin()
    })
})