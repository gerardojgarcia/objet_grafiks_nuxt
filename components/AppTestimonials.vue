<script>

import AppTestimonialsCard from '../components/AppTestimonialsCard.vue'
export default {
    name: "AppTestimonials",

    components: {
        AppTestimonialsCard
    },

    data() {
        return {
            testimonials: [
                {
                    id: 1,
                    text: "I was so busy running my store that having to manage an online one started to wear me down. I decided to sign up for their web management services and it's been a life changer. For the amount I've time I got back, the subscription was more than worth it!",
                    name: "Janet Dickens",
                    company: "ELACompost",
                    duration: '700'

                },
                {
                    id: 2,
                    text: " I needed a website that not only reflected my unique style and personality, but also helped me drive traffic and increase sales for my furniture business. They were able to create a website that perfectly captured my vibe and aesthetic, while also seamlessly integrating with my existing Shopify inventory. They were able to increase traffic to my site and helped me increase my online sales. i signed up for their managment service - now i don’t worry about handling the tech side of my business and can focus on what i actually care about. ",
                    name: "David Blanco",
                    company: "snap-studio!!",
                    duration: '1100'
                },
                {
                    id: 3,
                    text: " It was important for me to have a website that not only displays my services and pricing information clearly, but also allows potential clients to easily subscribe for our management services. . They integrated a pricing page and a subscription form that made it easy for potential clients to sign up for our management services. The website has been a great asset to my business and has helped me attract new clients. I highly recommend them to any business looking to enhance their presence online",
                    name: "Gabriela Duncan",
                    company: "Monarch Construction",
                    duration: '1400'
                },
                {
                    id: 4,
                    text: "I was in need of a website that not only looked professional, but also effectively communicated the services we offer and made it easy for potential customers to get in touch with us.  The team at Objet was incredibly responsive and easy to work with throughout the entire process. They listened to my needs and created a website that exceeded my expectations. Not only does it look great, but it also functions seamlessly and has helped us attract new business. ",
                    name: "Noel Sanchez",
                    company: "Verified Transport",
                    duration: '1700'
                },
                {
                    id: 5,
                    text: "Finding a website that not only presents the material in an engaging and interactive way, but also keeps the students interested and motivated was a top priority. That’s why I reached out to Gerardo and the team at Objet. They were able to create an interactive and visually appealing website that my students absolutely love. The website is easy to navigate and allows students to learn through interactive games and quizzes, which keeps them engaged and motivated. I highly recommend ObjetGrafiks to any school or education institution looking for a top-notch website for earth science education.",
                    name: "Sergio Carrillo",
                    company: "EarthTutor",
                    duration: '2000'
                },


            ]
        }
    }

}
</script>

<template>
    <section id="testimonials" class="bg-gray-200 p-8">


        <div class=" rounded-xl shadow-lg px-6  py-16  bg-white flex flex-col  ">
            <h5 class="text-5xl font-bold pb-16">Testimonials</h5>

            <div class="testimonial-container flex justify-center space-x-16 flex-wrap px-24">






                <AppTestimonialsCard :testimonials="testimonials" />



            </div>
        </div>


    </section>

</template>