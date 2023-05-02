import { expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import ProjectList from '@/components/ProjectList.vue'
import { buildProject } from '@/tests/utils/generate'

describe('ProjectList', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render a project card', async () => {
    vi.mock('vue-router', () => ({
      RouterLink: vi.fn()
    }))
    const fakeProjects = [buildProject(), buildProject(), buildProject(), buildProject()]

    render(ProjectList, {
      props: {
        projects: fakeProjects
      }
    })

    fakeProjects.forEach((fakeProject) => {
      expect(screen.getByText(fakeProject.name)).toBeInTheDocument()
    })
  })
})
