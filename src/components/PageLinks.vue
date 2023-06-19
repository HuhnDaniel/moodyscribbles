<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="flex flex-col my-16 w-1/2 mx-auto">
        <article class="flex pb-4">
            <div class="flex-auto text-center">
                <RouterLink to="/portfolio" class="bg-blue-300 rounded px-2 md:px-4 py-1 md:py-2">
                    <span class="mb-2">Portfolio</span>
                </RouterLink>
            </div>
            <div class="flex-auto text-center">
                <RouterLink to="/contact" class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Contact</RouterLink>
            </div>
            <div class="flex-auto text-center">
                <RouterLink to="/other" class="px-2 md:px-4 py-1 md:py-2 bg-blue-300 rounded">Other</RouterLink>
            </div>
        </article>
    </section>
</template>