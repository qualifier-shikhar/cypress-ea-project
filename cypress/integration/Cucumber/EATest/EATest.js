import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I visit EA site`, () => {
  cy.visit("http://eaapp.somee.com/");
});

Given(`I click login link`, () => {
  cy.contains("Login").click();
});

And(`I login as following`, (dataTable) => {

    dataTable.hashes().forEach(row => {
        cy.get('#UserName').type(row.userName);
        //extra param to hide password in log while running in CI
        cy.get('#Password').type(row.Password, { log: false });
    })
    cy.get(".btn").click();
});
