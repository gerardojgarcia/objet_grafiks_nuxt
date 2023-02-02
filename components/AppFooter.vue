<script>
export default {
    name: 'AppFooter',


}
</script>


<template>


    <div>

        <footer class="flex justify-between px-6 py-4 bg-white   w-full z-10 ">

            <p class="logo text-xl"><span class="font-bold ">Objet</span>grafiks</p>


            <nav class="space-x-6">


                <NuxtLink to="#hero">Home</NuxtLink>
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
                <NuxtLink to="/">Book</NuxtLink>


            </nav>



        </footer>

    </div>

</template>