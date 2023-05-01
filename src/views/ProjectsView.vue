<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import TechnologiesFilter from '@/components/TechnologiesFilter.vue'
import TheHeading from '@/components/TheHeading.vue'
import ProjectList from '@/components/ProjectList.vue'
import TheSpinner from '@/components/TheSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const { loading, error, filteredProjectsList } = storeToRefs(useProjectsStore())
</script>

<template>
  <TheHeading>Список проектов</TheHeading>

  <div v-if="loading">
    <TheSpinner />
  </div>

  <div v-else-if="error">
    <ErrorMessage> Ошибка при загрузке </ErrorMessage>
  </div>

  <div v-else>
    <TechnologiesFilter />
    <ProjectList :projects="filteredProjectsList" />
  </div>
</template>
