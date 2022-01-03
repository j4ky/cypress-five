/// <reference types="cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/')
  })

  it('User can search for products', () => {
    
    cy.get('#search').type('iMac')
    cy.get('#search').find('button').click()
    cy.get('a').contains('iMac').should('be.visible')

  })

})