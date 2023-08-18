<script>

import  AppHero  from '../components/AppHero.vue';
import AppExperience  from '../components/AppExperience.vue';
import AppQuote from '../components/AppQuote.vue'
import AppSEO from '../components/AppSEO.vue'
import AppTestimonials from '../components/AppTestimonials.vue'
import AppSubscribe from '../components/AppSubscribe.vue'

export default {
    name: 'index',

    components: {
        AppHero,
        AppExperience,
        AppQuote,
        AppSEO,
        AppTestimonials,
        AppSubscribe

    }
}
</script>
<template>
    <div>
    
    
    <AppHero/>
    <!--<AppQuote/>-->
    <AppExperience/>
    
    <AppSEO/>
    <AppSubscribe/>
    <AppTestimonials/>
    
    
    </div>

    



</template>