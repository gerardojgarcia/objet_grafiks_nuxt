<script>
export default {
  name: "AppNavButton",

  props: {
    link: String,
    to: String,
  },
};
</script>

<template>
  <div>
    <NuxtLink
      :to="to"
      class="px-4 py-3 cursor-pointer shadow-lg font-bold hover:shadow-xl hover:bg-red-200 dark:bg-gray-400 dark:hover:bg-white dark:text-black duration-200"
      >{{ link }}</NuxtLink
    >
  </div>
</template>
