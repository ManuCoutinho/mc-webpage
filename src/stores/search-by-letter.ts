import httpClient from '@/service/httpClient'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchByLetter = defineStore({
	id: 'search-by-letter',
	state: () => ({
		rawItems: [] as string[]
	}),
	getters: {},
	actions: {
		searchMealsByLetter(letter: string) {
			httpClient.get(`search.php?f=${letter}`).then((res) => this.rawItems.push(res.data.meals))
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchByLetter, import.meta.hot))
}
