<template>
	<div class="p-8 pb-0">
		<h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient }}</h1>
	</div>
	<Meals :meals="meals"/>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useSearchByIngredients } from "@/stores/search-by-ingredients"
import Meals from '@/components/meals-component.vue'

const { params } = useRoute()
const store = useSearchByIngredients()
const ingredient = computed(() => store.ingredient)
const meals = computed(() => store.items)

onMounted(() => {
	store.searchMealsByIngredient(params.ingredient as string)
})

</script>