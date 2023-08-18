<script>
export default {
    name: 'AppSubscribeCard',

    props: {
        plans: Array,
        
    }
   
}
</script>

<template>
     <div class="subscription-card rounded-xl shadow-lg py-16 px-6 text-left mr-4 hover:shadow-2xl" v-for="plans in plans" :key="plans.id">

<p class="subscription-title text-xl mb-1 font-bold">{{plans.name}}</p>
<p class="subscription-price text-4xl font-bold"><span class="text-sm font-normal mr-2"> from</span>${{plans.price}} </p>
 <p class="subscription-subtitle text-gray-600 mt-3 mr-12">{{ plans.description }}</p> 
 <span class="subscription-card-span bg-gray-300"></span>  
 <ul class=" pt-8 space-y-4"  >
    <li  v-for="features in plans.features" :key="features" > - <span>{{ features.feature.title }}</span> {{ features.feature }}</li>
    
 </ul>



</div>
</template> 

<style>
.subscription-card {
    width: max(20rem, 30rem);
    min-height: 33rem;
}

.subscription-card-span{
    
    width: 90%;
    height: .2rem;
    
    display: inline-block;
    border-radius: .5rem;
     margin: 1rem 0rem 1rem ;

      
}
</style>