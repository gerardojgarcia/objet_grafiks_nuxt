<script>
export default {
    name: 'AppHeader',


}
</script>


<template>


    <div>

        <header class="flex justify-between px-6  py-4 dark:bg-slate-400 dark:text-black bg-white fixed  w-full z-10 ">

            <p class="logo text-xl"><span class="font-bold ">Objet</span>grafik</p>


            <nav class="space-x-6">


                <NuxtLink to="/" class="hover:text-red-400 duration-150">Home</NuxtLink>
                <NuxtLink to="#portfolio" class="hover:text-red-400 duration-150">Projects</NuxtLink>


                <NuxtLink to="#contact" class="hover:text-red-400 duration-150">Book</NuxtLink>


            </nav>



        </header>

    </div>

</template>
