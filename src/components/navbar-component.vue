<template>
	<header
		class="bg-brand-tertiary shadow-brand-tertiary shadow h-16 flex justify-between items-center p-4"
	>
		<RouterLink
			:to="{ name: 'home' }"
			class="inline-flex gap-2 text-xl items-center h-full p-6 text-brand-white font-bold hover:text-brand-primary transition-colors"
		>
			<slot>
				<CookingIcon />
				Oishi Meals
			</slot>
		</RouterLink>
		<div class="flex items-center gap-2">
			<RouterLink
				:to="{ name: 'byName', params: { name: '' } }"
				class="inline-flex items-center h-full px-6 py-4 text-brand-white font-semibold transition-all hover:text-brand-primary hover:scale-105 hover:font-bold"
			>
				Search Meals
			</RouterLink>
			<RouterLink
				:to="{ name: 'byLetter', params: { letter: 'A' } }"
				class="inline-flex items-center h-full px-6 py-4 text-brand-white font-semibold transition-all hover:text-brand-primary hover:scale-105 hover:font-bold"
			>
				Meals By Letter
			</RouterLink>
			<RouterLink
				:to="{ name: 'ingredients' }"
				class="inline-flex items-center h-full px-6 py-4 text-brand-white font-semibold transition-all hover:text-brand-primary hover:scale-105 hover:font-bold"
			>
				Meals By Ingredients
			</RouterLink>
		</div>
	</header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CookingIcon from '@/components/icons/cooking-icon.vue'
</script>
