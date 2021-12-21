/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains('File Upload').click()
    })
    it('file upload demo', () => {
        cy.contains('File Uploader').should('be.visible')
        const filepath = 'images/QAPic.png'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').invoke('text').then(text => {
            expect(text.trim()).equal('QAPic.png')
        })
    })
})