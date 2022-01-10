/// <reference types="Cypress" />

describe('Testing of EA Table', ()=>{
    beforeEach("Login to Application", ()=> {
        cy.visit("/");
        cy.fixture("eauser").as("user")

        cy.get("@user").then((user)=> {
            cy.login(user.Password)    
        })
    })
    it("Performing Benefit Operation", () => {

        cy.contains("Employee List").click()
        cy.get('.table').find('tr')
            .contains("John").parent()
            .contains("Benefits")
            .click()
        cy.get('.table').find('tr').as("rows")

        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple: true})
        })
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Checking Manager Users option', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > a').should('have.attr', 'href', '/Role');
        cy.get(':nth-child(5) > a').click();
        cy.get(':nth-child(7) > :nth-child(3) > #RoleName').select('Guest');
        cy.get(':nth-child(7) > :nth-child(4) > .btn').click();
        cy.get(':nth-child(4) > a').click();
        cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', '\n                Ramesh\n            ');
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', '\n                3500\n            ');
        cy.get('#logoutForm > .nav > :nth-child(2) > a').click();
        cy.get('#loginLink').should('have.id', 'loginLink');
        /* ==== End Cypress Studio ==== */
    });
})