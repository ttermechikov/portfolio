import { projectBuilder } from '../support/generate'

describe('Projects page', () => {
  const BASE_URL = '/api/projects'

  it('should show an error message if API has not responded', () => {
    cy.intercept('GET', BASE_URL, {
      forceNetworkError: true
    })

    cy.visit('/projects')
    cy.findByRole(/alert/i).should('exist')
    cy.findByText(/error/i).should('exist')
  })

  it('should show a spinner while loading data from an API', () => {
    cy.intercept(
      {
        method: 'GET',
        path: BASE_URL
      },
      (req) => {
        //send the request with a delay value
        req.reply({ delay: 3000, body: { projects: [] } })
      }
    )

    cy.visit('/projects')

    cy.findByRole(/status/i).should('be.visible')
    cy.findByText(/loading/i).should('be.visible')
    cy.findByTestId(/spinner/i).should('be.visible')
  })

  it('should show a received projects list', () => {
    const FAKE_PROJECTS_COUNT = 5

    cy.intercept(
      {
        method: 'GET',
        path: BASE_URL
      },
      (req) => {
        //send the request with a delay value
        req.reply({
          body: {
            projects: projectBuilder.many(FAKE_PROJECTS_COUNT)
          }
        })
      }
    )

    cy.visit('/projects')

    cy.findByTestId(/technologies-filter/i).should('be.visible')
    cy.findByTestId(/projects-list/i).should('be.visible')
    cy.get('[data-testid="project-card"]').should('have.length', FAKE_PROJECTS_COUNT)
  })
})
