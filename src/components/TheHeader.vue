<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import HamburgerMenuIcon from '@/components/Icons/HamburgerMenuIcon.vue'

const route = useRoute()
const path = computed(() => route.path)
const routerLinks = [
  { to: '/', title: 'Главная' },
  { to: '/projects', title: 'Портфолио' }
]

const isHamburgerMenuVisible = ref(false)
const toggleHambergerMenu = () => {
  isHamburgerMenuVisible.value = !isHamburgerMenuVisible.value
}
</script>

<template>
  <header :class="$style.header">
    <nav :class="$style.nav">
      <div :class="$style.navInner">
        <button
          @click="toggleHambergerMenu"
          type="button"
          :class="$style.hamburgerMenuBtn"
          :aria-expanded="isHamburgerMenuVisible"
        >
          <HamburgerMenuIcon class="w-6 h-6" />
        </button>

        <div :class="{ hidden: !isHamburgerMenuVisible }" class="w-full md:block md:w-auto">
          <ul :class="$style.navList">
            <li
              v-for="(link, index) in routerLinks"
              :key="index"
              class="mb-3 lg:px-2 xl:px-2 lg:mb-0"
            >
              <RouterLink
                :to="link.to"
                :class="[
                  $style.routerLink,
                  path === link.to
                    ? 'text-blue-600  dark:text-blue-500 '
                    : 'text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'
                ]"
                >{{ link.title }}</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style module>
.header {
  @apply sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800;
}

.nav {
  @apply flex items-center justify-between w-full px-3 py-3 mx-auto lg:px-4;
}

.navInner {
  @apply max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4;
}

.navList {
  @apply flex-col pt-6 lg:flex-row lg:self-start lg:py-0 lg:flex;
}

.routerLink {
  @apply text-sm font-medium;
}

.hamburgerMenuBtn {
  @apply items-start text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600;
}
</style>
