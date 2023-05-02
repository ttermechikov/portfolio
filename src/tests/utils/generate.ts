import { faker } from '@faker-js/faker'
import type { Project, Technology } from '@/types'

const getId = faker.datatype.number
const getName = faker.random.words
const getDescription = faker.lorem.paragraph
const getWeight = faker.datatype.number
const getUrl = faker.internet.url

export const buildProject = (overrides: Partial<Project> = {}): Project => {
  return {
    id: getId(),
    name: getName(),
    description: getDescription(),
    url: getUrl(),
    repository_url: getUrl(),
    weight: getWeight(),
    technologies: [],
    ...overrides
  }
}

export const buildTechnology = (overrides: Partial<Technology> = {}): Technology => {
  return {
    id: getId(),
    weight: getWeight(),
    name: getName(),
    ...overrides
  }
}
