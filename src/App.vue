<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import { useProjectsStore } from './stores/projects'

const { fetchProjectList } = useProjectsStore()

fetchProjectList()
</script>

<template>
  <TheHeader />

  <TheMain>
    <RouterView />
  </TheMain>
</template>
