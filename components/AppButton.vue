<script setup>
defineProps({
  title: String,
  type: String,

});
</script>
<template>
  <div>
    <button
      :type="type"
      class="px-4 py-3 cursor-pointer shadow-lg font-bold hover:shadow-xl hover:bg-red-200 dark:bg-gray-400 dark:hover:bg-white dark:text-black duration-200"
    >
      {{ title }}
    </button>
  </div>
</template>
