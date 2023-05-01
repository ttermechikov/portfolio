<script setup lang="ts">
import TheHeading from '@/components/TheHeading.vue'
import GithubIcon from '@/components/Icons/GithubIcon.vue'
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon.vue'
import BitbucketIcon from '@/components/Icons/BitbucketIcon.vue'
import TelegramIcon from '@/components/Icons/TelegramIcon.vue'
</script>

<template>
  <TheHeading>Термечиков Темирлан</TheHeading>
  <ul :class="$style.aboutItemList" role="list">
    <li class="flex">
      <a :class="$style.aboutItem" href="mailto:temirlan.termechikov@gmail.com">
        <EnvelopeIcon :class="$style.icon" />
        <span class="ml-4">temirlan.termechikov@gmail.com</span>
      </a>
    </li>
    <li class="flex mt-4">
      <a :class="$style.aboutItem" href="https://t.me/ttermechikov" target="_blank">
        <TelegramIcon :class="$style.icon" />
        <span class="ml-4">Telegram</span>
      </a>
    </li>
    <li class="flex mt-4">
      <a :class="$style.aboutItem" href="https://github.com/ttermechikov" target="_blank">
        <GithubIcon :class="$style.icon" />
        <span class="ml-4">GitHub</span>
      </a>
    </li>
    <li class="flex mt-4">
      <a :class="$style.aboutItem" href="https://bitbucket.com/ttermechikov" target="_blank">
        <BitbucketIcon :class="$style.icon" />
        <span class="ml-4">Bitbucket</span>
      </a>
    </li>
  </ul>
</template>

<style module>
.aboutItemList {
  @apply mt-8 pt-8 border-t border-gray-200 dark:border-gray-800;
}

.aboutItem {
  @apply flex items-center text-sm font-medium transition text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500;
}

.icon {
  @apply h-6 w-6 flex-none;
}
</style>
