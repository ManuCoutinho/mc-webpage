import { defineStore, acceptHMRUpdate } from 'pinia'
import type { SearchByLetter } from '@/models'
import httpClient from '@/service/httpClient'

export const useSearchByLetter = defineStore('search-by-letter', {
	state: (): SearchByLetter => ({
		meals: []
	}),
	getters: {},
	actions: {
		searchMealsByLetter(letter: string | null) {
			if (letter) {
				httpClient.get(`search.php?f=${letter}`).then((res) => {
					this.meals = res.data.meals
				})
			}
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSearchByLetter, import.meta.hot))
}
