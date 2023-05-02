import { expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import TechnologiesList from '@/components/TechnologiesList.vue'
import { buildTechnology } from '@/tests/utils/generate'

describe('TechnologiesList', () => {
  it('should render a technologies list', async () => {
    const fakeTechnologies = [buildTechnology(), buildTechnology(), buildTechnology()]

    render(TechnologiesList, {
      props: {
        technologies: fakeTechnologies
      }
    })

    await expect(screen.queryAllByTestId('technology-item')).toHaveLength(fakeTechnologies.length)
    fakeTechnologies.forEach((technology) => {
      expect(screen.getByText(technology.name)).toBeInTheDocument()
    })
  })
})
