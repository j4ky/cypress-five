/// <reference types="cypress" />

context('Detail view', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User can view products', () => {
    
    cy.get('#search').type('iMac')
    cy.get('#search').find('button').click()
    cy.get('a').contains('iMac').click()
    cy.get('#tab-description').should('be.visible')
    cy.get('h1').contains('iMac').should('be.visible')
    cy.get('h2').contains('$122.00').should('be.visible')
    cy.get('img[src="https://demo.opencart.com/image/cache/catalog/demo/imac_1-228x228.jpg"]').should('be.visible')




  })

})