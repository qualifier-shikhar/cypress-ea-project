/// <reference types="cypress" />

context('checking alert', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    specify('checking alert', () => {
        cy.contains('Click for JS Alert').should('exist').click()

        // firing window: alert event with on() method
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('I am a JS Alert');
        })
        cy.on('window:confirm', () => true);
        cy.get('[id="result"]').should('contain', 'You successfully clicked an alert')
    })
})