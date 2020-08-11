///<reference types="cypress" />


describe("More Entries Button", ()=> {
    beforeEach(()=> {
        cy.visit("https://lastcallmedia.com/blog")
    })

    it("should have the total of 6 posts when it first renders", ()=> {
        cy.get("div.node--blog.view-mode-teaser").should("have.length", 6)
    })

    it("should load additional 6 additional post onto the page on click", ()=> {
        cy.get("div.node--blog.view-mode-teaser").should("have.length", 6)
        cy.get("a.pager--next.button.large").click()
        cy.get("div.node--blog.view-mode-teaser").should("have.length", 12) //assertion to check once the button is click it should have 12 block total
    })

    //test fails, but trying to make sure that the next more entries work 
    it("should load additional 12 additional post onto the page on click", ()=> {
        cy.get("div.node--blog.view-mode-teaser").should("have.length", 6)
        cy.get("a.pager--next.button.large").click()
        cy.wait(2000)
        cy.get("a.pager--next.button.large").click()
        cy.get("div.node--blog.view-mode-teaser").should("have.length", 18) //assertion to check once the button is click it should have 12 block total
    })

})