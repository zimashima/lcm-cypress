/// <reference types="cypress" />

//should show alert
context("Form submissions", ()=> {

    it("should NOT be able to send the message without CAPTCHA", ()=> {
        cy.visit("https://lastcallmedia.com/contact")
        cy.get("#edit-field-name-0-value")
            .type("Mashima Button")
        cy.get("#edit-mail")
            .type("zimashima@gmail.com")
        cy.get("#edit-message-0-value")
            .type("This is a test message")
        cy.get("#edit-submit")
            .click()
        cy.get('div[role="alert"]')
            .contains("The answer you entered for the CAPTCHA was not correct.")
    })
    //however, I feel the better way to do it was to check if the request is being sent out at all
    //check how did the request is captcha verified
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
