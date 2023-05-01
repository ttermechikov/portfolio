<template>
  <h1 :class="$style.heading">
    <slot></slot>
  </h1>
</template>

<style module>
.heading {
  @apply mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white;
}
</style>
