import { expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import ProjectListItem from '@/components/ProjectListItem.vue'
import { buildProject } from '@/tests/utils/generate'

describe('ProjectListItem', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render a project card', async () => {
    const fakeProject = buildProject()
    vi.mock('vue-router', () => ({
      RouterLink: vi.fn()
    }))

    render(ProjectListItem, {
      props: {
        project: fakeProject
      }
    })

    expect(screen.getByTestId('project-card')).toBeInTheDocument()
    expect(screen.getByText(fakeProject.name)).toBeInTheDocument()
  })
})
