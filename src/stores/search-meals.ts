import httpClient from '@/service/httpClient'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchMeals = defineStore('search-meals', {
	state: () => ({
		rawItems: ['Shake'] as string[]
	}),
	getters: {},
	actions: {
		searchMeals(keyword: string) {
			httpClient.get(`search.php?s=${keyword}`).then((res) => this.rawItems.push(res.data.meals))
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchMeals, import.meta.hot))
}
