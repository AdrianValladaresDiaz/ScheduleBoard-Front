// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("should find the 1st input and type mario@mario.com", function () {
    cy.get("input")
      .first()
      .type("mario@mario.com")
      .should("have.value", "mario@mario.com");
  });

  it("should find the 2md input and type papaya", function () {
    cy.get("input").last().type("papaya").should("have.value", "papaya");
  });

  it("should login", function () {
    cy.get("input")
      .first()
      .type("mario@mario.com")
      .should("have.value", "mario@mario.com");

    cy.get("input").last().type("papaya").should("have.value", "papaya");

    cy.contains("Log me in").click();
  });
});

export {};
