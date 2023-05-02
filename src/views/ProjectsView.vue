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

  <TheSpinner v-if="loading" />

  <ErrorMessage v-else-if="error"> {{ error }} </ErrorMessage>

  <div v-else>
    <TechnologiesFilter />
    <ProjectList :projects="filteredProjectsList" />
  </div>
</template>
