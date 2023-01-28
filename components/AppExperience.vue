<script>

import  AppExperienceCard  from '../components/AppExperienceCard.vue';
export default {
    name: "AppExperience",


    data() {
        return {
            client: [
                {
                    id: 1,
                    name: "Oranges & Lemons",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://dtlaclean.com',
                    img: '/earthtutor_mockup.png',
                    duration: '700'
                },
                {
                    id: 2,
                    name: "ELACompost",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://elacompost.info',
                    img: '/elacompost_desktop_mockup.webp',
                    duration: '1100'
                },
                {
                    id: 3,
                    name: "Verified Transport",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://verifiedtransport.info',
                    img: '/website_desktop_mockup_verified.webp',
                    duration: '1400'
                },
                {
                    id: 4,
                    name: "Tewsr.art",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://',
                    img: '/public/earthtutor_mockup.png',
                    duration: '1800'
                },
                {
                    id: 5,
                    name: "snap-studio!!",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://snap-studio.shop',
                    img: '/smartphone_mockup.webp',
                    duration: '700'
                },
                {
                    id: 6,
                    name: "EarthTutor",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://earthtutor.info',
                    img: '/earthtutor_mockup.png',
                    duration: '1100'
                },
                {
                    id: 7,
                    name: "TaxBuddy",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://yourtaxbuddy.xyz',
                    img: '/tax_buddy_mobile_mockup1.webp',
                    duration: '1400'

                },
                {
                    id: 8,
                    name: "Monarch Construction",
                    description: 'ipsum dolor sit amet Loremconsectetur adipisicing elit. Quis el',
                    link: 'https://buildwithmonarch.info',
                    img: '/tax_buddy_mobile_mockup1.webp',
                    duration: '1800'

                },

            ]
        }
    },

}
</script>

<template>
    <section id="work" class="bg-gray-200 p-8 ">


    <div class="md:flex md:flex-col md:justify-center md:align-center rounded-xl shadow-lg mx-6 py-16  bg-white"  data-aos="zoom-in-up" data-aos-duration="1000">
    
        <div class="text-left self-start w-1/4 px-8">
            <h1 class="text-6xl font-bold">Clients</h1>
        </div>
    <div >

        <AppExperienceCard :client="client"/>
        



    </div>
       

    
    
    </div>

    </section>
</template>