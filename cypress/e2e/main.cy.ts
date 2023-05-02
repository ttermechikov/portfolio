describe('Main page', () => {
  it('can navigate to the projects page', () => {
    cy.visit('/')
    cy.findByText(/портфолио/i).click()
  })

  it('should display contacts list', () => {
    cy.visit('/')
    cy.findByText(/^telegram$/i).should('exist')
    cy.findByText(/^github$/i).should('exist')
    cy.findByText(/^bitbucket$/i).should('exist')
    cy.findByText(/^.+@.+$/i).should('exist')
  })
})
