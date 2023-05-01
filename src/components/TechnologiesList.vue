<script setup lang="ts">
import type { Technology } from '@/types'

defineProps<{
  technologies: Technology[]
}>()
</script>

<template>
  <p>
    <span v-for="technology in technologies" :key="technology.id" :class="$style.technologies">
      {{ technology.name }}
    </span>
  </p>
</template>

<style module>
.technologies {
  @apply mr-1 mb-1 bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300;
}
</style>
