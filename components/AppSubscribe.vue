<script>

import AppSubscribeCard from '../components/AppSubscribeCard.vue';

export default {
    name: 'AppSubscribe',

    component:{
        AppSubscribeCard
    },

    data(){
        return {
            plans: [
                {
                    id: 1,
                    name: 'Starter',
                    price: "500",
                    description: 'TExt text text',
                    features: [{feature:'text text text'}, {feature:'text text text'}, {feature:'text text text'}]
                },
                {
                    id: 2,
                    name: 'Growth',
                    price: "1500",
                    description: 'TExt text text',
                    features: [{feature:'text2 text2 text2'}, {feature:'text2 text2 text2'}, {feature:'text2 text2 text2'}]
                },
                {
                    id: 3,
                    name: 'Enterprise',
                    price: "5000",
                    description: 'Text text text',
                    features: [{feature:'text3 text3 text3'}, {feature:'text3 text3 text3'}, {feature:'text3 text3 text3'}]
                },
            ],
            
        }
    }



}
</script>

<template>
    <section class="flex flex-col p-8 bg-gray-200  ">

    <div class="bg-white rounded-xl shadow-xl py-16 flex flex-col justify-center items-center text-center"> 

    <h5 class="text-5xl font-bold">Focus On What Matters Most</h5>
    <p class="pt-8 w-1/2">You didn't start your business only to find out that an effective online presence takes up all of your time. Get your time back by letting us handle the web hassles and get back to what matters </p>



<div class="subscription-card-container w-full flex flex-col md:flex-row justify-center mt-16">


 <AppSubscribeCard :plans="plans"/>


</div>
    
    
    </div>
        
    </section>
</template>

<style scoped>

    .subscription-card {
        max-width: 27rem;
        min-height: 30rem;
        
    }


</style>