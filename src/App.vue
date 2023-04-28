<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageUnderlay from './components/PageUnderlay.vue'
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
</script>

<template>
  <PageUnderlay />

  <TheHeader />

  <TheMain>
    <RouterView />
  </TheMain>
</template>
