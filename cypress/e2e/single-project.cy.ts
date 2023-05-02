import { projectBuilder } from '../support/generate'

let fakeProject = projectBuilder.one()

describe('Sinle project page', () => {
  const BASE_URL = `/api/projects`

  it('should show an error message if API has not responded', () => {
    cy.intercept('GET', BASE_URL, {
      forceNetworkError: true
    })

    cy.visit(`/projects/${fakeProject.id}`)
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
        req.reply({ delay: 3000, body: { projects: [fakeProject] } })
      }
    )

    cy.visit(`/projects/${fakeProject.id}`)

    cy.findByRole(/status/i).should('be.visible')
    cy.findByText(/loading/i).should('be.visible')
    cy.findByTestId(/spinner/i).should('be.visible')
  })

  it('should show a request project', () => {
    cy.intercept(
      {
        method: 'GET',
        path: BASE_URL
      },
      (req) => {
        //send the request with a delay value
        req.reply({
          body: {
            projects: [fakeProject]
          }
        })
      }
    )

    cy.visit(`/projects/${fakeProject.id}`)

    cy.findByTestId('project-name').should('have.text', fakeProject.name)
    cy.findByTestId('project-description').contains(fakeProject.description)
    cy.findByTestId('project-repository-url').should(
      'have.attr',
      'href',
      fakeProject.repository_url
    )
    cy.findByTestId('project-url').should('have.attr', 'href', fakeProject.url)
    fakeProject.technologies.forEach((technology) => {
      cy.findByText(technology.name).should('be.visible')
    })
  })
})
