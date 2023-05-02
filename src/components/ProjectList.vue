<script setup lang="ts">
import type { Project } from '@/types'
import ProjectListItem from '@/components/ProjectListItem.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <ul :class="$style.projects" role="list" data-testid="projects-list">
    <ProjectListItem v-for="project in projects" :key="project.id" :project="project" />
  </ul>
</template>

<style module>
.projects {
  @apply grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-8 sm:mt-10 sm:mb-10;
}
</style>
