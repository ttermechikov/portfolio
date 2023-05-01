<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '@/types'
import TechnologiesList from '@/components/TechnologiesList.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <li :class="$style.card">
    <h2 :class="$style.title">
      {{ project.name }}
    </h2>

    <div :class="$style.description">
      <div v-html="project.description" class="line-clamp-3" />
    </div>

    <TechnologiesList :technologies="project.technologies" />

    <RouterLink :to="`/projects/${project.id}`" :class="$style.button"> Подробнее </RouterLink>
  </li>
</template>

<style module>
.card {
  @apply flex flex-col items-start justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700;
  min-height: 300px;
}

.title {
  @apply mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white;
}

.description {
  @apply relative mb-3 font-normal text-gray-700 dark:text-gray-400;
}

.button {
  @apply inline-flex self-start items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>
