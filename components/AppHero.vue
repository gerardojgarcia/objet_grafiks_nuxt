<script>

import  AppNavButton  from "../components/AppNavButton.vue";
export default {
    name: "AppHero",


  

}
</script>

<template>
    <div class="bg-gray-200 p-8  " >


    <div class="md:flex md:justify-center md:align-center rounded-xl shadow-lg mx-6 py-16 bg-white md:mt-10 h-screen"  data-aos="zoom-in-up" data-aos-duration="1000">
    
        <div class="hero-info w-1/2">
            <div class="hero-text text-left space-y-3 mb-16  " data-aos="fade-right" data-aos-duration="2000">
            
                <h1 class="text-4xl font-bold">Go beyond a website.</h1>
                <p class="subtitle text-2xl">Create an online experience</p>
            
            
            
            
            </div>

            <AppNavButton to="#work" link="Explore Our Work" />
        </div>

        <div class="hero-graphic">
        
        
        
        </div>
         
    
    
    </div>

    </div>
</template>