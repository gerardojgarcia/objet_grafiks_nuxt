<script>
export default {
    name: "AppTestimonialsCard",
    props: {
        testimonials: Array,

    }

}
</script>

<template>
     <div class="testimonial-card flex flex-col mt-16 " v-for="testimonials in testimonials">
    
    <p class="testimonial-text mb-4 p-6 text-xl">"{{ testimonials.text }}"</p>

    <div class="self-end">
        <p class="testimonial-name font-bold">{{testimonials.name}}</p>
        <p class="testimonial-company font-bold">{{testimonials.company}}</p>
    </div>



</div>
</template>

<style scoped>

.testimonial-card {
    max-width: 30rem;
}
</style>