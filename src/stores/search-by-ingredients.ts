import httpClient from '@/service/httpClient'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchByIngredients = defineStore({
	id: 'search-by-ingredients',
	state: () => ({
		rawItems: [] as string[]
	}),
	getters: {},
	actions: {
		searchMealsByIngredient(ingredient: string) {
			httpClient.get(`search.php?i=${ingredient}`).then((res) => this.rawItems.push(res.data.meals))
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchByIngredients, import.meta.hot))
}

