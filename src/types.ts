export type Technology = {
  id: number
  name: string
  weight: number
}

export type Project = {
  id: number
  name: string
  description: string
  url: string
  repository_url: string
  weight: number
  technologies: Technology[]
}

export type ProjectsMap = Record<Project['id'], Project>

export type ObjectWithId = {
  id: any
}

export type ObjectWithWeight = {
  weight: number
}
