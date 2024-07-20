<template>
	<div class="max-w-3xl mx-auto p-8 space-y-4">
		<h1 class="text-4xl font-bold mb-5 text-brand-primary">{{ meal.strMeal }}</h1>
		<img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full rounded" />
		<ul class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
			<li class="inline-flex gap-2">
				<strong class="font-bold text-brand-base">Category: </strong>
				<p>{{ meal.strCategory || " - "}}</p>
			</li>
			<li class="inline-flex gap-2">
				<strong class="font-bold text-brand-base">Area: </strong>
				<p>{{ meal.strArea || " - "}}</p>
			</li>
			<li class="inline-flex gap-2">
				<strong class="font-bold text-brand-base">Tags: </strong>
				<p>{{ meal.strTags || " - " }}</p>
			</li>
		</ul>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="space-y-3">
				<h2 class="text-2xl font-semibold">Ingredients</h2>
				<ul>
					<template v-for="(el, ind) of new Array(20)" :key="el">
						<li v-if="meal[`strIngredient${ind + 1}` as keyof typeof meal]">
							{{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}` as keyof typeof meal] }}
						</li>
					</template>
				</ul>
			</div>
			<div class="flex flex-col justify-between">
				<a
					v-if="meal.strSource"
					:href="meal.strSource"
					target="_blank"
					rel="noopener noreferrer nofollow"
					aria-label="original source"
					class="px-3 py-2 text-brand-tertiary hover:font-semibold hover:underline transition-colors self-end"
					>View original source</a
				>
				<div class="w-fit self-end"><youtube-button :href="meal.strYoutube" /></div>
			</div>
		</div>
		<div class="space-y-3">
			<p class="font-semibold text-2xl">Method</p>
			<p class="py-3 leading-7 text-justify text-md">{{ meal.strInstructions }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import httpClient from "@/service/httpClient"
import YoutubeButton from '@/components/youtube-button.vue'
import type { MealDetails } from "@/models"

const { params } = useRoute()
const meal = ref({} as MealDetails)

onMounted(() => {
	httpClient.get<{ meals: MealDetails[] }>(`lookup.php?i=${params.id}`)
	.then(({ data }) => meal.value = data.meals[0] || {})
})
</script>
