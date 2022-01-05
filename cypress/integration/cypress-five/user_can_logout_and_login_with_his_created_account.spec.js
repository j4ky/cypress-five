/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User can login', () => {
    
    cy.task('getAll').then((data) => {
      
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.contains('Login').click()
      cy.get('#input-email').type(data.email)
      cy.get('#input-password').type(data.pass)
      cy.get('input[type=submit]').click()
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.get('a').contains('Logout').should('be.visible')
    })

  })

  it('User can logout', () => {
    
    cy.task('getAll').then((data) => {
      
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.contains('Login').click()
      cy.get('#input-email').type(data.email)
      cy.get('#input-password').type(data.pass)
      cy.get('input[type=submit]').click()
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.get('a').contains('Logout').click()
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.contains('Login').should('be.visible')
    })

  })
})
    