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

<p class="subscription-title text-lg font-bold">{{plans.name}}</p>
<p class="subscription-price text-3xl font-bold"><span class="text-sm font-normal mr-2"> from</span>${{plans.price}} <span class="text-sm font-normal mr-2">/month</span></p>
 <p class="subscription-subtitle text-gray-600">{{ plans.description }}</p> 
 <span class="subscription-card-span bg-gray-300"></span>  
 <ul class=" pt-8 space-y-4"  >
    <li  v-for="features in plans.features" :key="features" > - {{ features.feature }}</li>
    
 </ul>



</div>
</template> 

<style>
.subscription-card {
    width: max(20rem, 25rem);
    min-height: 33rem;
}

.subscription-card-span{
    
    width: 75%;
    height: .2rem;
    
    display: inline-block;
    border-radius: .5rem;
     margin: 1rem 0rem 1rem ;

      
}
</style>