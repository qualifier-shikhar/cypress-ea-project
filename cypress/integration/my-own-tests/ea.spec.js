/// <reference types="Cypress" />

describe('Testing of EA App', ()=>{
    it("Testing EA Site for assertion", ()=> {
        cy.visit("http://www.executeautomation.com/site")
        // cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
        //     expect($x).to.have.class("ls-nav-active")
        // })
    })
})