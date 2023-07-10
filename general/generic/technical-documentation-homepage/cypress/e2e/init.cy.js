/// <reference types="cypress" />

describe('vite init page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check title', () => {
    cy.title().should('include', 'Technical')
  })

})
