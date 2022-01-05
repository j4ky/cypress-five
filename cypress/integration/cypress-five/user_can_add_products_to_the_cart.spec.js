/// <reference types="cypress" />

context('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User can search for products', () => {
    
    cy.contains('Desktops').click()
    cy.get('a').contains('Show All Desktops').click()
    cy.get('[onclick="cart.add(\'28\', \'1\');"').click()
    cy.get('[onclick="cart.add(\'29\', \'1\');"').click()
    cy.get('#cart-total').click()
    cy.contains('View Cart').click()
    cy.contains('HTC Touch HD')
    cy.contains('Palm Treo Pro')
  
  })

})
    