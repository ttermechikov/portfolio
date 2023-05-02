<template>
  <div :class="$style.alert" role="alert">
    <slot></slot>
  </div>
</template>

<style module>
.alert {
  @apply flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400;
}
</style>
