<template>
	<header-layout :title-page="title" />
	<Meals :meals="meals" />
</template>

<script setup lang="ts">
import httpClient from '@/service/httpClient'
import { onMounted, ref } from 'vue'
import Meals from '@/components/meals-component.vue'
import HeaderLayout from '@/components/header-layout.vue'
import type { MealsType } from '@/models'

const title = 'Random meals'
const meals = ref([] as MealsType[])

onMounted(async () => {
	for (let i = 0; i < 10; i++) {
		httpClient.get('random.php').then(({ data }) => meals.value.push(data.meals[0]))
	}
})
</script>
