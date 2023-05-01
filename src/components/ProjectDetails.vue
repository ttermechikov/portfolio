<script setup lang="ts">
import type { Project } from '@/types'
import TheHeading from '@/components/TheHeading.vue'
import TechnologiesList from '@/components/TechnologiesList.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <TheHeading>{{ project.name }}</TheHeading>
  <TechnologiesList :technologies="project.technologies" class="mt-8 mb-8" />
  <p v-html="project.description" :class="$style.description" />
  <div :class="$style.buttons">
    <a
      v-show="project.repository_url"
      :href="project.repository_url"
      :class="$style.button"
      target="_blank"
      >Репозиторий
    </a>
    <a
      v-show="project.url && project.url.includes('http')"
      :href="project.url"
      :class="$style.button"
      target="_blank"
      >Демо</a
    >
  </div>
</template>

<style module>
.description {
  @apply mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl;
}

.description a {
  @apply font-medium text-blue-600 dark:text-blue-500 hover:underline;
}

.repositoryLink {
  @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}

.buttons {
  @apply mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex;
}

.button {
  @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
</style>
