/// <reference types="cypress" />

import fix from '../../fixtures/five-fixtures.json'

context('Registration', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/')
  })

  it('user can create an account', () => {

    let data = regData()
    cy.task('setEmail', data.email)
    cy.task('setPass', fix.password)
    
    cy.get('[href="https://demo.opencart.com/index.php?route=account/account"]').first().click()
    cy.contains('Register').click()
    cy.get('#input-firstname').type('firstname')
    cy.get('#input-lastname').type('lastname')
    cy.get('#input-email').type(data.email)
    cy.get('#input-telephone').type(data.tel)
    cy.get('#input-password').type(fix.password)
    cy.get('#input-confirm').type(fix.password)
    cy.get('[name=agree]').check()
    cy.get('input[type=submit]').click()
    cy.contains('Your Account Has Been Created!').should('be.visible')
    cy.contains('Continue').click()
    
  })

  function regData() {
    
    let rnd = Math.floor(Math.random() * (9999 - 1 + 1) ) + 1 
    let email = 'email' + rnd + '@dispostable.com'
    let tel = Math.floor(Math.random() * (9999999 - 100000 + 1) ) + 100000

    return {
      email,
      tel
    }
    
  }

})