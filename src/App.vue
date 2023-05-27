<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Banner from './components/Banner.vue'
import HomeView from './views/HomeView.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
    <header>
        <Banner />
    </header>

    <HomeView />

    <RouterView />

    <footer>
        <PageFooter />
    </footer>
</template>
