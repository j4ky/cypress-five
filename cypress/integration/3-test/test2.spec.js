/// <reference types="Cypress" />

describe('My second Test', () => {
    

    it.skip('finds the content "type"', () => {

      cy.intercept('GET', '/todo*', {
        statusCode: 201,
        body: {
          name: 'Peter Pan',
        },
        qs: {
          postId: 1,
          id: 3,
        },
      }).as('matija')

    cy.visit('/todo')
    
    
    
  
  
      
  
      
    })
  })