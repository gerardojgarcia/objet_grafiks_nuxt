<script>
export default {
    name: 'AppSubscribeCard',

    props: {
        plans: Array,
    }
   
}
</script>

<template>
     <div class="subscription-card rounded-xl shadow-xl py-16 px-6 text-left mr-4" v-for="plans in plans">

<p class="subscription-title">{{plans.name}}</p>
<p class="subscription-price text-2xl font-bold"><span class="text-sm font-normal mr-2">starting from</span>${{plans.price}} <span class="text-sm font-normal mr-2">/month</span></p>
 <p class="subscription-subtitle">{{ plans.description }}</p>   
 <ul class=" pt-8" >
    <li >{{ plans.features.feature }}</li>
    
 </ul>



</div>
</template> 