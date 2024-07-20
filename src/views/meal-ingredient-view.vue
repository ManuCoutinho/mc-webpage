<template>
	<header-layout :title-page="title"/>
	<Meals :meals="meals"/>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useSearchByIngredients } from "@/stores/search-by-ingredients"
import Meals from '@/components/meals-component.vue'
import headerLayout from "@/components/header-layout.vue"

const { params } = useRoute()
const store = useSearchByIngredients()
const ingredient = computed(() => store.ingredient)
const meals = computed(() => store.items)
const title = `Meals for ${ingredient.value}`

onMounted(() => {
	store.searchMealsByIngredient(params.ingredient as string)
})

</script>