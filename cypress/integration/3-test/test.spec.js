/// <reference types="Cypress" />

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.request('https://reqres.in/api/users/2').as('odgovor')

    cy.get('@odgovor').should((response) => {
      
      expect(response.body.data).to.have.property('first_name')
      expect(response.body.data.last_name).to.have.string('Weaver')
    })


    

    
  })
})