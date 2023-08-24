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
    <div class="flex flex-row flex-wrap mx-6 md:mx-16 mt-16 justify-center self-center ">
        <div class="client-card shadow-xl rounded-lg pb-12 md:w-80  bg-gray-100 overflow-hidden hover:shadow-2xl mt-16 mx-3 md:mx-8 "
            v-for="client in client" data-aos="fade-up-left" :data-aos-duration="client.duration">

            <nuxt-img :src="client.img" alt="Img of website" class="w-full h-60 object-cover" />
            <div class="client-card-info space-y-4 mt-4 px-4 mb-6">
                <strong class="text-xl">{{ client.name }}</strong>
                <p class="text-lg text-gray-500"> {{ client.description }}</p>
            </div>

            <AppNavButton :to="client.link" link="Explore" target="_blank" class="mx-4 mt-12" />


        </div>
    </div>
</template>