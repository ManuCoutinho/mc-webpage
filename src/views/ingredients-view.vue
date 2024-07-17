<template>
	<div class="p-8 pb-0">
		<h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
	</div>
	<div class="px-8">
		<input
			type="text"
			v-model="keyword"
			class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 ,b-3 w-full"
			placeholder="Search for ingredients"
		/>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<a
				href="#"
				v-for="ingredient of computedIngredients"
				@click.prevent="openIngredient(ingredient)"
				:key="ingredient.idIngredient"
				class="block bg-white rounded p-3 mb-3 shadow"
			>
				<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { IngredientsType, SearchIngredients } from '@/models';
import { useSearchByIngredients } from '@/stores/search-by-ingredients';
import httpClient from '@/service/httpClient';

const store = useSearchByIngredients()
const router = useRouter()
const keyword = ref('')
const ingredients = ref([] as IngredientsType[])

const computedIngredients = computed(() => {
	if (!computedIngredients.value) return ingredients
	return ingredients.value.filter((el) =>
		el.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
	) 
})

function openIngredient(ingredient: string) {
	store.searchMealsByIngredient(ingredient)
	router.push({
		name: "byIngredient",
		params: { ingredient: ingredient }
	})
}

onMounted(() => {
	httpClient.get<SearchIngredients>('list.php?i=list')
	.then(({ data }) => ingredients.value = data.meals)
})
</script>

