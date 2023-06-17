<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Banner from './components/Banner.vue'
// import HomeView from './views/HomeView.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
    <header>
        <Banner />
    </header>

    <!-- <HomeView /> -->
    <!-- <RouterLink to="/">Home</RouterLink> -->

    <RouterView />

    <footer class="fixed bottom-0 w-full">
        <PageFooter />
    </footer>
</template>
