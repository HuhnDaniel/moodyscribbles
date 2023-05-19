<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Banner from './components/Banner.vue'
</script>

<template>
    <header>
        <Banner />
    </header>

    <RouterView />
</template>
