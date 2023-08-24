<script setup>


const gtag = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Objetgrafik',
  screen_name: 'Home'
})

import  AppHero  from '../components/AppHero.vue';
import AppExperience  from '../components/AppExperience.vue';
import AppQuote from '../components/AppQuote.vue'
import AppSEO from '../components/AppSEO.vue'
import AppTestimonials from '../components/AppTestimonials.vue'
import AppSubscribe from '../components/AppSubscribe.vue'
import AppContact from '../components/AppContact.vue'


</script>
<template>
    <div>
    
    
    <AppHero/>
    <!--<AppQuote/>-->
    <AppExperience/>
    
    <AppSEO/>
    <AppSubscribe/>
    <AppTestimonials/>
    <AppContact/>
    
    </div>

    



</template>
<style scoped>

* {
    overflow:hidden;
}

</style>