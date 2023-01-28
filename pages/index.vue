<script>

import  AppHero  from '../components/AppHero.vue';
import AppExperience  from '../components/AppExperience.vue';
import AppQuote from '../components/AppQuote.vue'
import AppSEO from '../components/AppSEO.vue'
import AppTestimonials from '../components/AppTestimonials.vue'

export default {
    name: 'index',

    components: {
        AppHero,
        AppExperience,
        AppQuote,
        AppSEO,
        AppTestimonials

    }
}
</script>
<template>
    <div>
    
    
    <AppHero/>
    <AppExperience/>
    <AppQuote/>
    <AppSEO/>
    <AppTestimonials/>
    
    </div>

    



</template>