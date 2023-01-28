<script>
export default {
    name: "AppNavButton",

    props: {
        link: String,
        to: String,
    }
   
}
</script>

<template>
    <div >
        <NuxtLink :to="to" class="px-4 py-3 cursor-pointer shadow-lg font-bold hover:shadow-xl">{{ link }}</NuxtLink>
    </div>
</template>