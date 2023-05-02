import type { ObjectWithId, Project, Technology } from '@/types'
import { marked } from 'marked'

const parseMarkdown = (markdown: string) => {
  return marked.parse(markdown)
}

export const processProjectDescription = (project: Project): Project => {
  return {
    ...project,
    description: parseMarkdown(project.description)
  }
}

export const sortById = (a: ObjectWithId, b: ObjectWithId) => a.id - b.id

export const filterTechnologiesByUnique = (technologiesList: Technology[]) => {
  return technologiesList.filter((technology, index, array) => {
    const nextItem = array[index + 1]

    if (!nextItem) {
      return true
    }

    return technology.id !== nextItem.id
  })
}

export const filterProjectsByName = (projectsList: Project[], selectedName: Project['name']) => {
  return projectsList.filter((project: Project) => {
    return project.technologies.some(
      (projectTechnology: Technology) => projectTechnology.name === selectedName
    )
  })
}
