import type { IngredientsType, SearchByIngredient } from '@/models'
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
			const ingredientNld = ingredient.toLowerCase().normalize('NFD').replace(' ', '_')

			httpClient.get(`filter.php?i=${ingredientNld}`).then((res) => {
				this.items = res.data.meals
			})
		},
		setIngredient(ingredient: IngredientsType) {
			this.ingredient = ingredient
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchByIngredients, import.meta.hot))
}
