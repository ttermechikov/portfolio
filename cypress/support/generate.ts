import { build, oneOf, sequence } from '@jackfranklin/test-data-bot'
import type { Project, Technology } from '../../src/types'

export const technologyBuilder = build<Technology>({
  fields: {
    id: sequence(),
    name: oneOf('JavaScript', 'TypeScript', 'HTML', 'CSS'),
    weight: sequence((x) => x)
  }
})

export const projectBuilder = build<Project>({
  fields: {
    id: sequence(),
    name: sequence((x) => `Project ${x} name`),
    description: sequence((x) => `Project ${x} description`),
    url: sequence((x) => `https://127.0.0.1/url/${x}`),
    repository_url: sequence((x) => `https://127.0.0.1/repo/${x}`),
    weight: sequence((x) => Math.round(x * Math.random())),
    technologies: technologyBuilder.many(2)
  }
})
