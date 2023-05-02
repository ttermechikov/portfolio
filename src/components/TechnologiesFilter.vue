<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import type { Technology } from '@/types'

const { selectedTechnologyName, technologiesList } = storeToRefs(useProjectsStore())

function selectTechnology(name: Technology['name']) {
  selectedTechnologyName.value = name
}
</script>

<template>
  <div class="container" data-testid="technologies-filter">
    <button
      @click="selectTechnology('')"
      :class="{ selected: !selectedTechnologyName }"
      type="button"
      class="button"
    >
      Все
    </button>
    <button
      v-for="technology in technologiesList"
      :key="technology.id"
      :class="{ selected: selectedTechnologyName === technology.name }"
      @click="selectTechnology(technology.name)"
      type="button"
      class="button"
      data-testid="technology-select-button"
    >
      {{ technology.name }}
    </button>
  </div>
</template>

<style scoped>
.container {
  @apply flex items-center justify-center py-4 md:py-8 flex-wrap;
}
.button {
  @apply text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800;
}

.selected {
  @apply text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800;
}
</style>
