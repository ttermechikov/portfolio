<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import ProjectDetails from '@/components/ProjectDetails.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import TheSpinner from '@/components/TheSpinner.vue'

const route = useRoute()

const projectId = route.params.id

const { projectsMap, error, loading } = storeToRefs(useProjectsStore())
const project = computed(() => projectsMap.value[+projectId])
</script>

<template>
  <TheSpinner v-if="loading" />
  <ErrorMessage v-else-if="!project"> {{ error }} </ErrorMessage>
  <ProjectDetails v-else :project="project" />
</template>
