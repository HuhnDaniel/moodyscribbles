<script setup lang="ts">
import { RouterView } from 'vue-router'

import Banner from './components/Banner.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
    <header>
        <Banner />
    </header>

    <RouterView />

    <footer class="fixed bottom-0 w-full">
        <PageFooter />
    </footer>
</template>
