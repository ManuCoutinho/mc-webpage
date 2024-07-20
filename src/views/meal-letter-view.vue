<template>
	<header-layout :title-page="title" />
	<div class="flex flex-wrap justify-center gap-3 p-8 mb-6">
		<router-link
		v-for="letter of letters"
		:key="letter"
		:to="{ name: 'byLetter', params: { letter } }"
			class="flex items-center text-brand-base font-semibold justify-center hover:text-brand-primary hover:scale-150 transition-all"
		>
			{{ letter }}
		</router-link>
	</div>
	<Meals :meals="meals"/>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSearchByLetter } from '@/stores/search-by-letter'
import HeaderLayout from '@/components/header-layout.vue'
import Meals from '@/components/meals-component.vue'

const store = useSearchByLetter()
const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.meals)
const title = "Meals by Letter"

watch(route, () => {
	store.searchMealsByLetter(route.params.letter as string)
})

onMounted(() => {
	store.searchMealsByLetter(route.params.letter as string)
})
</script>
