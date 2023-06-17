<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="flex flex-col mb-16 w-1/2 mx-auto">
        <article class="flex pb-4">
            <!-- <button class="flex-auto">
                <span class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Portfolio</span>
            </button> -->
            <RouterLink to="/portfolio">Portfolio</RouterLink>
            <button class="flex-auto">
                <span class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Contact</span>
            </button>
            <button class="flex-auto">
                <span class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Other</span>
            </button>
        </article>

        <!-- <article class="flex pt-16">
            <button class="flex-auto">
                <span class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Instagram</span>
            </button>
            <button class="flex-auto">
                <span class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">TikTok</span>
            </button>
        </article> -->
    </section>
</template>