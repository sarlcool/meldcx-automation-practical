/// <reference types="cypress" />

describe('Test login functionality', () => {
  it('should open login page', function () {
    cy.visit('http://localhost:8080/');
  });

  it('should check login elements', () => {
    cy.get('[placeholder="Enter Username"]')
      .invoke('attr', 'placeholder')
      .should('contain', 'Enter Username');
    cy.get('[placeholder="password"]')
      .invoke('attr', 'placeholder')
      .should('contain', 'password');
    cy.get('.sc-bZQynM').invoke('text').should('contain', 'LOGIN');
    cy.get('.sc-ifAKCX > div')
      .invoke('text')
      .should('contain', 'If you do not have an account, contact an admin');
  });

  it('should not login when login credentials are blank', function () {
    cy.get('[placeholder="Enter Username"]').type('');
    cy.get('[placeholder="password"]').type('');
    cy.get('.sc-bZQynM').click();
  });

  it('should not login when correct username is supplied but password is missing', function () {
    cy.get('[placeholder="Enter Username"]').type('SomeUser_name');
    cy.get('[placeholder="password"]').type('');
    cy.get('.sc-bZQynM').click();
  });

  it('should not login when correct password is supplied but username is missing', function () {
    cy.get('[placeholder="Enter Username"]').type('{selectall} ');
    cy.get('[placeholder="password"]').type('TopSecret1234!');
    cy.get('.sc-bZQynM').click();
  });

  it('should not login using non-existent login credentials', function () {
    cy.get('[placeholder="Enter Username"]').type('someone');
    cy.get('[placeholder="password"]').type('{selectall}someone1234');
    cy.get('.sc-bZQynM').click();
  });
});
