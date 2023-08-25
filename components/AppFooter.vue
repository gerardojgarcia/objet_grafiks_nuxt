<script>
export default {
    name: 'AppFooter',


}
</script>


<template>


    <div>

        <footer class="flex justify-between px-6 py-4 bg-white dark:bg-gray-400  w-full z-10 ">

            <p class="logo text-xl"><span class="font-bold ">Objet</span>grafiks</p>


            <nav class="space-x-6">


                <NuxtLink to="#hero" class="hover:text-red-400 duration-150">Home</NuxtLink>
                <NuxtLink to="/portfolio" class="hover:text-red-400 duration-150">Portfolio</NuxtLink>
                <NuxtLink to="/" class="hover:text-red-400 duration-150">Book</NuxtLink>


            </nav>



        </footer>

    </div>

</template>