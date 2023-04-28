<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const path = computed(() => route.path)

const routerLinks = [
  { to: '/', title: 'Главная' },
  { to: '/projects', title: 'Портфолио' },
]
</script>

<template>
  <header class="pointer-events-none relative z-50 flex flex-col">
    <div class="top-0 z-10 h-16 pt-6">
      <div class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="relative flex gap-4">
                <div class="flex flex-1 justify-end md:justify-center">
                  <nav class="pointer-events-auto hidden md:block">
                    <ul
                      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                    >
                      <li v-for="(link, index) in routerLinks" :key="index">
                        <RouterLink
                          :to="link.to"
                          :class="{ 'text-teal-500': path === link.to }"
                          class="relative block px-3 py-2 transition hover:text-teal-500"
                          >{{ link.title }}</RouterLink
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
