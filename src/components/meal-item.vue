<template>
	<div class="bg-brand-white shadow-lg rounded-lg hover:scale-105 transition-all">
		<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
			<img
				:src="meal.strMealThumb"
				:alt="meal.strMeal"
				class="rounded-t-xl w-full h-48 object-cover contrast-125"
				v-show="!loading"
			/>
			<div v-show="loading" class="rounded-t-xl w-48 h-48 bg-gradient-to-r from-slate-100 to-slate-200"></div>
		</router-link>
		
		<div class="p-4 space-y-2">
			<h3 class="font-bold">{{ meal.strMeal }}</h3>
			<p class="mb-4">{{ $filters.truncateWords(meal.strInstructions, 20) }}</p>
			<div class="flex items-center justify-end">
				<youtube-button :href="meal.strYoutube"/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import type { MealsType } from "@/models";
import YoutubeButton from "./youtube-button.vue"

	const { meal, loading } = defineProps<{
		meal: MealsType
		loading?: boolean
	}>()
</script>