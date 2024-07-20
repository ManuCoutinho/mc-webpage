import { defineStore, acceptHMRUpdate } from 'pinia'
import httpClient from '@/service/httpClient'
import type { SearchMeals } from '@/models'

export const useSearchMeals = defineStore('search-meals', {
	state: (): SearchMeals => ({
		meals: [],
		loading: false
	}),
	getters: {},
	actions: {
		searchMeals(keyword: string) {
			this.loading = true
			httpClient.get(`search.php?s=${keyword}`).then((res) => {
				this.meals = res.data.meals
				this.loading = false
			})
		},
		resetSearch() {
			this.meals = []
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchMeals, import.meta.hot))
}
