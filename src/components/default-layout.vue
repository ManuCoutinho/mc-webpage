<template>
	<navbar-component />
	<main class="w-full h-full bg-brand-white">
		<div class="max-w-[1200px] mx-auto bg-brand-white">
			<router-view />
		</div>
	</main>
</template>

<script setup lang="ts">
import NavbarComponent from './navbar-component.vue'
import { RouterView } from 'vue-router'
</script>
