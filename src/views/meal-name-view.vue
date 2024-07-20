<template>
	<header-layout :title-page="title" />
	<div class="px-8 pb-4 mb-4">
		<input
			type="text"
			v-model="keyword"
			class="rounded-lg text-brand-base border-2 bg-brand-white border-brand-tertiary/20 focus:ring-brand-primary/40 focus:border-brand-primary/40 w-full placeholder:text-brand-base/50"
			placeholder="Search for Meals"
			@change="searchMeals"
			:autofocus="true"
		/>
	</div>
	<Meals :meals="meals" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import HeaderLayout from '@/components/header-layout.vue'
import Meals from '@/components/meals-component.vue'
import { useSearchMeals } from '@/stores/search-meals'
import { useRoute } from 'vue-router'

const title = 'Meals by Name'
const store = useSearchMeals()
const meals = computed(() => store.meals)
const route = useRoute()
const keyword = ref('')

function searchMeals() {
	keyword.value ? store.searchMeals(keyword.value) : store.resetSearch()
}


onMounted(() => {
	keyword.value = route.params.name as string
	searchMeals()
})
</script>
