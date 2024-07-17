<template>
	<div class="p-8 pb-0 text-orange-500">
		<h1 class="text-4xl font-bold mb-4">Random meals</h1>
		<Meals :meals="meals" />
	</div>
</template>

<script setup lang="ts">
import httpClient from '@/service/httpClient'
import { onMounted, ref } from 'vue'
import Meals from "@/components/meals-component.vue"

const meals = ref([])
onMounted(async () => {
	for (let i = 0; i < 10; i++) {
		httpClient.get('random.php').then(({ data }) => meals.value.push(data.meals[0]))
	}
})
</script>
