<script>
import AppNavButton from '../components/AppNavButton.vue';

export default {
    name: "AppExperienceCard",
    props: {
        client: Array
    },
    components: {
        AppNavButton
    },

}
</script>


<template>
    <div class="flex flex-row flex-wrap mx-16 mt-16 justify-center ">
        <div class="client-card shadow-xl rounded-lg pb-16 w-80  bg-gray-100 overflow-hidden hover:shadow-2xl mt-16 mx-8 "
            v-for="client in client" data-aos="fade-up-left" :data-aos-duration="client.duration">

            <img :src="client.img" alt="Img of website" class="w-full h-60 object-cover">
            <div class="client-card-info space-y-8 mt-4 px-4 mb-6">
                <strong class="text-xl">{{ client.name }}</strong>
                <p class="text-xl"> {{ client.description }}</p>



            </div>

            <AppNavButton :to="client.link" link="Explore" target="_blank" class="mx-4" />


        </div>
    </div>
</template>