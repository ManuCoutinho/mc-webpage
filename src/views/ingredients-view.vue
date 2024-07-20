<template>
	<header-layout :title-page="title" />
	<div class="px-8 space-y-6">
		<input
			type="text"
			v-model="keyword"
			autofocus
			class="rounded-lg text-brand-base border-2 bg-brand-white border-brand-tertiary/20 focus:ring-brand-primary/40 focus:border-brand-primary/40 w-full placeholder:text-brand-base/50"
			placeholder="Search for ingredients"
		/>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<a
			v-for="ingredient of computedIngredients"
				href="#"
				@click.prevent="openIngredient(ingredient)"
				:key="ingredient.idIngredient"
				class="block bg-brand-white text-brand-base rounded p-3 mb-3 shadow-lg hover:text-brand-secondary transition-colors"
			>
				<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import type { IngredientsType, SearchIngredients } from '@/models'
import { useSearchByIngredients } from '@/stores/search-by-ingredients'
import httpClient from '@/service/httpClient'
import headerLayout from '@/components/header-layout.vue'

const title = 'Ingredients'
const store = useSearchByIngredients()
const router = useRouter()
const keyword = ref('')
const ingredients = shallowRef([] as IngredientsType[])

const computedIngredients = computed(() => {
	if (!keyword.value) return ingredients.value

	return ingredients.value.filter((el) => el.strIngredient.toLocaleLowerCase().includes(keyword.value.toLocaleLowerCase()))

})

function openIngredient(ingredient: IngredientsType) {
	store.setIngredient(ingredient)
	router.push({
		name: 'byIngredient',
		params: { ingredient: ingredient.strIngredient }
	})
}

onMounted(async () => {
	httpClient.get<SearchIngredients>('list.php?i=list').then(({ data }) => {
		ingredients.value = data.meals
	})
})
</script>
