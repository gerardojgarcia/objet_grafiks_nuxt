<script>

import AppNavButton from "../components/AppNavButton.vue";
export default {
    name: "AppHero",




}
</script>

<template>
    <div class="bg-gray-200 p-8  ">


        <div class="md:flex md:justify-center md:align-center rounded-xl shadow-lg px-6 py-16 pb-36 bg-white md:mt-10 "
            data-aos="zoom-in-up" data-aos-duration="1000">

            <div class="hero-info w-1/4 p-24 self-center">
                <div class="hero-text text-left  space-y-3 mb-16  " data-aos="fade-right" data-aos-duration="2000">

                    <h1 class="text-6xl font-bold">Go beyond a website.</h1>
                    <p class="subtitle text-xl">With experts in Web Development, SEO, and E-commerce ready to work with
                        you, create an online experience that your customers coming back for more</p>




                </div>

                <AppNavButton to="#work" link="Explore Our Work" />
            </div>

            <div class="hero-graphic w-3/4 grid place-items-center ">

                <!--<div class="z-6 mr-32 absolute  " data-aos="fade-left" data-aos-duration="700"><img src="/Web Development.png" alt="Illustration of the different aspects of web development " ></div>
        <div class="mt-36 ml-72 z-0 absolute" data-aos="fade-right" data-aos-duration="1200">

        <img src="/Digital Marketing.png" alt="">
        </div>
        <div class=" mt-96 absolute mr-96 z-2" data-aos="fade-left" data-aos-duration="1600"><img src="/E-commerce.png" alt=""></div>-->

                <img src="/Development.png" alt="image of a team collaborating on building a website"
                    data-aos="fade-left" data-aos-duration="1200">

            </div>



        </div>

    </div>
</template>