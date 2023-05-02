import { vi, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { flushPromises } from '@vue/test-utils'
import { useProjectsStore } from '@/stores/projects'
import { buildProject, buildTechnology } from '@/tests/utils/generate'

describe('Projects Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should filter a projects list if a technology is selected', async () => {
    const fakeProjects = [
      buildProject(),
      buildProject(),
      buildProject({
        technologies: [buildTechnology({ name: 'Vue' })]
      }),
      buildProject({
        technologies: [buildTechnology({ name: 'Vue' })]
      }),
      buildProject({
        technologies: [buildTechnology({ name: 'Node' })]
      })
    ]
    const store = useProjectsStore()
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: () => {
        return Promise.resolve({
          projects: fakeProjects
        })
      }
    })

    await store.fetchProjectList()
    await flushPromises()

    expect(store.filteredProjectsList).toHaveLength(fakeProjects.length)
    expect(Object.keys(store.projectsMap)).toHaveLength(fakeProjects.length)

    // after changing a selected technology value
    store.selectedTechnologyName = 'Vue'
    expect(store.filteredProjectsList).toHaveLength(2)

    store.selectedTechnologyName = 'Node'
    expect(store.filteredProjectsList).toHaveLength(1)

    store.selectedTechnologyName = ''
    expect(store.filteredProjectsList).toHaveLength(fakeProjects.length)
  })

  it('should have a unique list of technologies list', async () => {
    const fakeTechnology1 = buildTechnology({ id: 1, name: 'Vue', weight: 1 })
    const fakeTechnology2 = buildTechnology({ id: 2, name: 'Node', weight: 1 })
    const fakeTechnology3 = buildTechnology({ id: 3, name: 'TS', weight: 1 })
    const fakeProjects = [
      buildProject({
        technologies: [fakeTechnology3]
      }),
      buildProject({
        technologies: [fakeTechnology2, fakeTechnology3]
      }),
      buildProject({
        technologies: [fakeTechnology1, fakeTechnology2]
      })
    ]
    const store = useProjectsStore()
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: () => {
        return Promise.resolve({
          projects: fakeProjects
        })
      }
    })

    await store.fetchProjectList()
    await flushPromises()

    expect(store.technologiesList).toHaveLength(3)
  })

  it('should change the loading state during fetching a project list from an API', () => {
    const store = useProjectsStore()
    expect(store.loading).toBeFalsy()
    global.fetch = vi.fn().mockResolvedValueOnce({
      projects: []
    })

    store.fetchProjectList()

    expect(store.loading).toBeTruthy()
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })
})
