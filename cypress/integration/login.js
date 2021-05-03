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

  it('should login as SomeName', function () {
    cy.get('[placeholder="Enter Username"]').type('SomeUser_name');
    cy.get('[placeholder="password"]').type('TopSecret1234!');
    cy.get('.sc-bZQynM').click();
  });

  it('should display logged in user details', function () {
    cy.get('.sc-bdVaJa > div')
      .invoke('text')
      .should('contain', 'Hello SomeName');
    cy.get('.sc-bwzfXH');
    cy.get('.sc-bxivhb');
  });

  it('should check if information of the logged in user is correct', function () {
    cy.get('.sc-bwzfXH > :nth-child(1)')
      .invoke('text')
      .should('contain', 'Name')
      .should('contain', 'SomeName');

    cy.get('.sc-bwzfXH > :nth-child(2)')
      .invoke('text')
      .should('contain', 'Favourite Fruit')
      .should('contain', 'some fruit');

    cy.get('.sc-bwzfXH > :nth-child(3)')
      .invoke('text')
      .should('contain', 'Favourite Movie')
      .should('contain', 'The Room');

    cy.get('.sc-bwzfXH > :nth-child(4)')
      .invoke('text')
      .should('contain', 'Favourite Number')
      .should('contain', 'BN<1234>');
  });

  it('should click LOGOUT button', function () {
    cy.get('.sc-bxivhb').click();
  });

  it('should login as Dummy Tree', function () {
    cy.get('[placeholder="Enter Username"]').type('dummytree');
    cy.get('[placeholder="password"]').type('test1');
    cy.get('.sc-bZQynM').click();
  });

  it('should display logged in user details', function () {
    cy.get('.sc-bdVaJa > div')
      .invoke('text')
      .should('contain', 'Hello DummyTree');
    cy.get('.sc-bwzfXH');
    cy.get('.sc-bxivhb');
  });

  it('should check if information of the logged in user is correct', function () {
    cy.get('.sc-bwzfXH > :nth-child(1)')
      .invoke('text')
      .should('contain', 'Name')
      .should('contain', 'Dummy Tree');

    cy.get('.sc-bwzfXH > :nth-child(2)')
      .invoke('text')
      .should('contain', 'Favourite Fruit')
      .should('contain', 'Mango');

    cy.get('.sc-bwzfXH > :nth-child(3)')
      .invoke('text')
      .should('contain', 'Favourite Movie')
      .should('contain', 'V for Vendetta');

    cy.get('.sc-bwzfXH > :nth-child(4)')
      .invoke('text')
      .should('contain', 'Favourite Number')
      .should('contain', 'The last prime number');
  });

  it('should click LOGOUT button', function () {
    cy.get('.sc-bxivhb').click();
  });

  // recheck login page elements
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
});
