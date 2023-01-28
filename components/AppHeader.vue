<script>
export default {
    name: 'AppHeader',


}
</script>


<template>


<div>

    <header class="flex justify-between px-4 py-4 bg-white fixed w-full  z-10 ">

        <p class="logo text-xl"><span class="font-bold ">Objet</span>grafiks</p>


        <nav class="space-x-6">


<NuxtLink to="/">Home</NuxtLink>
<NuxtLink to="/portfolio">Portfolio</NuxtLink>
<NuxtLink to="/">Book</NuxtLink>

        
    </nav>



    </header>

</div>
   
</template>