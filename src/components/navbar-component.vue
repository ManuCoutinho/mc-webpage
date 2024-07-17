<template>
	<header>
		<RouterLink
			:to="{ name: 'home' }"
			class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
		>
			Home
		</RouterLink>
	</header>
	<div class="flex items-center gap-1">
		<RouterLink
			:to="{ name: 'byName' }"
			class="inline-flex items-center h-full px-2 transition-colors hover:text-white hover:bg-orange-500"
		>
			Search Meals
		</RouterLink>
		<RouterLink
			:to="{ name: 'byLetter' }"
			class="inline-flex items-center h-full px-2 transition-colors hover:text-white hover:bg-orange-500"
		>
			Meals By Letter
		</RouterLink>
		<RouterLink
			:to="{ name: 'ingredients' }"
			class="inline-flex items-center h-full px-2 transition-colors hover:text-white hover:bg-orange-500"
		>
			Meals bBy Ingredients
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

