<template>
	<Navbar />
	<main>
		<div class="max-w-[1200px] mx-auto">
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import Navbar from '@/navbar-component.vue'
import { RouterView } from 'vue-router'
</script>
