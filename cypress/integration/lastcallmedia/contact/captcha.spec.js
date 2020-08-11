/// <reference types="cypress" />


//both fails, run out of time, too
describe("CAPTCHA's default", ()=> {
    
    it("should exist", ()=> {
        cy.visit("https://lastcallmedia.com/contact")
        cy.get("label.rc-anchor-checkbox-label").contains("I'm not a robot")
    })
    it("should default to Recapcha requires verification in accessible status", ()=> {
        cy.get("#recaptcha-accessible-status").contains("Recaptcha requires verification")
    })
})


describe("CAPTCHA's verified", ()=> {
    
    it("click to verify should work", ()=> {
        cy.visit("https://lastcallmedia.com/contact")
        cy.get(".recaptcha-checkbox-border").click()
    })
    it("should change accessibility status to 'You are verified'", ()=> {
        cy.get("#recaptcha-accessible-status").should("have.text", "You are Verified")
    })
})