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
                    description: 'For simple projects that involve basic website development, minor updates, and simple customization',
                    features: [
                        {feature:"Basic Website Design ",
                        detail:"Design and development of a simple, static website with a few pages, including a homepage, about page, services page, and contact page."}, 
                        {feature:"Template Customization " ,
                        detail: "Customizing a pre-designed template to match the client's branding, including logo integration, color scheme adjustment, and basic layout changes.s"}, 
                        {feature:"Contact Form ",
                        detail:"Adding a contact form to the website to allow visitors to send inquiries or messages directly to the client"},
                    {feature: "Mobile Responsiveness ",
                        detail: "Ensuring that the website is responsive and functions well on different devices, such as desktops, tablets, and smartphones."},
                    {feature:"Basic SEO Setup ",
                    detail:'Implementing basic on-page SEO elements such as meta tags, headers, and optimizing images for improved search engine visibility.'},
                    
                ]
                },
                {
                    id: 2,
                    name: 'Growth',
                    price: "2500",
                    description: 'For moderately complex projects that include more advanced features, responsive design, and some backend integration: ',
                    features: [
                        {feature:'Content Management System (CMS) Integration',
                        detail:"Setting up a CMS like WordPress or a headless CMS to enable the client to easily update and manage content."}, 
                    {feature:'Custom Page Templates  ',
                    detail:"Designing and developing custom page templates for different sections of the website, such as blog posts, portfolio items, or product listings."}, 
                    {feature:'Third-Party Integrations',
                    detail:"Integrating third-party tools and plugins for functionalities like social media feeds, newsletter signups, or analytics tracking."},
                    {feature:'E-commerce Integration ',
                    detail:"Adding basic e-commerce functionality, such as product catalog, shopping cart, and checkout process, suitable for small online stores."},
                    {feature:'Advanced SEO',
                    detail:"Conducting more comprehensive keyword research, implementing structured data, and optimizing content for better search engine rankings."}
                
                
                ]
                },
                {
                    id: 3,
                    name: 'Enterprise',
                    price: "4500",
                    description: 'For complex projects that require advanced functionalities, extensive backend development, e-commerce integration, and custom design:',
                    features: [
                        {feature:'Custom Web Applications',
                        detail:"Developing custom web applications or interactive features like calculators, user dashboards, or advanced search functionalities."
                    }, 
                        {feature:'Complex E-commerce Solutions ',
                        detail:"Building a full-fledged e-commerce platform with advanced features like product variants, inventory management, payment gateways, and order processing."}, 
                        {feature:'Custom Design and Animation ',
                        detail:"Creating intricate and visually appealing designs, incorporating animations or interactive elements to enhance user engagement."},
                        {feature:'API Integrations ',
                        detail:"Integrating with third-party APIs for advanced functionalities, such as integrating with external services or fetching data from other sources."},
                        {feature:'User Authentication and Security',
                        detail:" Implementing user authentication and authorization systems to secure sensitive user data and provide personalized experiences."},
                    
                    
                    ]
                },
            ],
            
        }
    }



}
</script>

<template>
    <section class="flex flex-col p-8 bg-gray-200 overflow-hidden ">

    <div class="bg-white rounded-xl shadow-xl md:mx-32 md:py-16 mb-10 p-8 flex flex-col justify-center items-center md:text-center" data-aos="fade-up" data-aos-duration="1500"> 

    <h5 class="text-5xl px-6 font-bold">Focus On What Matters Most</h5>
    <p class="pt-8 md:w-1/2 px-6">You didn't start your business only to find out that an effective online presence takes up an incredible amount of time. Reclaim it by letting us handle the web hassles and get back to what matters </p>




    
    
    </div>

    <div class="subscription-card-container  flex flex-col md:flex-row px-4 pb-16 md:px-32 justify-center">


<AppSubscribeCard :plans="plans"/>


</div>
        
    </section>
</template>

<style scoped>

    


</style>