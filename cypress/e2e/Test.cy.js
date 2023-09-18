/// <reference types= "cypress" />

const currency = "SAR";

Cypress.Commands.add("visitSite", () => {
  cy.visit("https://www.almosafer.com");
  cy.get(".cta__saudi").click();
});

describe("Test Cases", () => {
  it("Check currency in SAR", () => {
    cy.visitSite();
    cy.get('[data-testid="Header__CurrencySelector"]')
      .invoke("text")
      .should("include", currency);
  });

  it("Check website's language", () => {
    cy.visitSite();
    cy.get("html").should("have.attr", "lang", "en");
  });
});
