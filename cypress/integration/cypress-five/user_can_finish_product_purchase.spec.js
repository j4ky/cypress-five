/// <reference types="cypress" />

context('Purchases', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/')
  })

  it('User can finish product purchase', () => {
    
    cy.task('getAll').then((data) => {
      
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.contains('Login').click()
      cy.get('#input-email').type(data.email)
      cy.get('#input-password').type(data.pass)
      cy.get('input[type=submit]').click()
      cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
      cy.get('a').contains('Logout').should('be.visible')
    })

    cy.visit('https://demo.opencart.com/')
    cy.contains('Desktops').click()
    cy.get('a').contains('Show All Desktops').click()
    cy.get('[onclick="cart.add(\'47\', \'1\');"').click()
    cy.get('#button-cart').click()
    cy.get('#cart-total').click()
    cy.contains('View Cart').click()
    cy.contains('HP LP3065')

    cy.get('a.btn.btn-primary').contains('Checkout').click()

    cy.get('#input-payment-firstname').type('firstname')
    cy.get('#input-payment-lastname').type('lastname')
    cy.get('#input-payment-address-1').type('address')
    cy.get('#input-payment-city').type('city')
    cy.get('#input-payment-postcode').type('10000')
    cy.get('#input-payment-country').select('Croatia')
    cy.get('#input-payment-zone').select('848')
    cy.get('#button-payment-address').click()
    cy.get('#button-shipping-address').click()
    cy.get('#button-shipping-method').click()
    cy.get('input[name=agree]').check()
    cy.get('#button-payment-method').click()
    cy.get('#button-confirm').click()
    cy.contains('Your order has been placed!').should('be.visible')
    cy.contains('Continue').click()


  })

})