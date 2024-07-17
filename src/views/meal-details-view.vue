<template>
	<div class="max-w-[800px] mx-auto p-8">
		<h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
		<img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full" />
		<div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
			<div>
				<string class="font-bold">Category: {{ meal.strCategory }}</string>
			</div>
			<div>
				<string class="font-bold">Area: {{ meal.strArea }}</string>
			</div>
			<div>
				<string class="font-bold">Tags: {{ meal.strTags }}</string>
			</div>
		</div>
		<div class="my-3">{{ meal.strInstructions }}</div>

		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div>
				<h2 class="text-2xl">Ingredients</h2>
				<ul>
					<template v-for="(el, ind) of new Array(20)" :key="el">
						<li v-if="meal[`strIngredient${ind + 1}` as keyof typeof meal]">
							{{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}` as keyof typeof meal] }}
						</li>
					</template>
				</ul>
			</div>
			<div class="mt-4">
				<YoutubeButton :href="meal.strYoutube" />
				<a
					v-if="meal.strSource"
					:href="meal.strSource"
					target="_blank"
					class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
					>View original source</a
				>
			</div>
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
