import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Project, ProjectsMap, Technology } from '@/types'
import {
  filterProjectsByName,
  filterTechnologiesByUnique,
  processProjectDescription,
  sortByIdAsc,
  sortByWeightDesc
} from '@/composables/utils'

const apiBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://ttermechikov.tk/api'
    : 'http://localhost:3000/api'

export const useProjectsStore = defineStore('projects', () => {
  const projectList = ref<Project[]>([])
  const error = ref(null)
  const loading = ref(false)
  const selectedTechnologyName = ref('')

  function fetchProjectList() {
    loading.value = true

    fetch(`${apiBaseUrl}/projects`)
      .then((res) => res.json())
      .then((data) => {
        const { projects } = data

        projectList.value = projects.map((project: Project) => processProjectDescription(project))
      })
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false))
  }

  const projectsMap = computed((): ProjectsMap => {
    return projectList.value.reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {} as ProjectsMap)
  })
  const filteredProjectsList = computed((): Project[] => {
    if (selectedTechnologyName.value) {
      return filterProjectsByName(projectList.value, selectedTechnologyName.value)
    }

    return projectList.value
  })

  const technologiesList = computed((): Technology[] => {
    const flattenTechnologiesList = projectList.value
      .flatMap((project: Project) => project.technologies)
      .sort(sortByIdAsc)

    return filterTechnologiesByUnique(flattenTechnologiesList).sort(sortByWeightDesc)
  })

  return {
    projectList,
    filteredProjectsList,
    projectsMap,
    error,
    loading,
    fetchProjectList,
    technologiesList,
    selectedTechnologyName
  }
})
