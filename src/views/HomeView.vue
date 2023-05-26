<script setup lang="ts">
import PageLinks from '../components/PageLinks.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

const images = [
    "https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654040935/cld-sample-2.jpg",
    "https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654040868/sample.jpg"
]

import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
    <main>
        <div class="w-2/3 mx-auto my-8">
            <Swiper :pagination="true" :modules="[Pagination]">
                <SwiperSlide v-for="image in images">
                    <img  class="w-full h-full" :src="`${image}`" />
                </SwiperSlide>
            </Swiper>
        </div>

        <PageLinks />
    </main>
</template>