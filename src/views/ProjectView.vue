<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import ProjectDetails from '@/components/ProjectDetails.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import TheSpinner from '@/components/TheSpinner.vue'

const route = useRoute()

const projectId = route.params.id

const { projectsMap, loading } = storeToRefs(useProjectsStore())
const project = projectsMap.value[+projectId]
</script>

<template>
  <div v-if="loading">
    <TheSpinner />
  </div>
  <div v-else-if="!project">
    <ErrorMessage>Проект не найден</ErrorMessage>
  </div>
  <div v-else>
    <ProjectDetails :project="project" />
  </div>
</template>
