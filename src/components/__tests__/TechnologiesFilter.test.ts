import { vi, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import TechnologiesFilter from '@/components/TechnologiesFilter.vue'
import { buildProject, buildTechnology } from '@/tests/utils/generate'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import { useProjectsStore } from '@/stores/projects'

describe('TechnologiesFilter', () => {
  let store: Pinia

  beforeEach(() => {
    store = createPinia()
    setActivePinia(store)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should set the selected technology name on click', async () => {
    const fakeTechnology1 = buildTechnology({ id: 1, name: 'TS' })
    const fakeTechnology2 = buildTechnology({ id: 2, name: 'JS' })
    const fakeTechnology3 = buildTechnology({ id: 3, name: 'Vitest' })

    const fakeProjects = [
      buildProject({
        technologies: [fakeTechnology1, fakeTechnology2]
      }),
      buildProject({
        technologies: [fakeTechnology1, fakeTechnology3]
      }),
      buildProject(),
      buildProject({
        technologies: [fakeTechnology3]
      })
    ]
    const projectsStore = useProjectsStore()
    projectsStore.projectList = fakeProjects

    render(TechnologiesFilter, {
      global: {
        plugins: [store]
      }
    })

    expect(screen.getAllByTestId('technology-select-button')).toHaveLength(
      projectsStore.technologiesList.length
    )
    expect(projectsStore.selectedTechnologyName).toBe('')

    // selecting some technology by clicking on it
    fireEvent.click(await screen.findByText(fakeTechnology1.name))
    expect(projectsStore.selectedTechnologyName).toBe(fakeTechnology1.name)

    fireEvent.click(await screen.findByText(fakeTechnology2.name))
    expect(projectsStore.selectedTechnologyName).toBe(fakeTechnology2.name)

    // reset the selected technology
    fireEvent.click(await screen.findByText(/все/i))
    expect(projectsStore.selectedTechnologyName).toBe('')
  })
})
