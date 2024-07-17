import type { SearchByIngredient } from '@/models'
import httpClient from '@/service/httpClient'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchByIngredients = defineStore('search-by-ingredients', {
	state: (): SearchByIngredient => ({
		items: [],
		ingredient: null
	}),
	getters: {},
	actions: {
		searchMealsByIngredient(ingredient: string) {
			this.ingredient = ingredient
			httpClient.get(`filter.php?i=${ingredient}`).then((res) => this.items.push(res.data.meals))
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchByIngredients, import.meta.hot))
}
