<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
		<MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" :loading="loading" />
	</div>
	<div v-if="meals.length == 0" class="flex justify-center text-gray-600 p-8">
		<p class="text-center italic text-slate-400">There are no meals</p>
	</div>
</template>

<script setup lang="ts">
	import type { MealsType } from '@/models';
import MealItem from './meal-item.vue';

	const { meals, loading } = defineProps<{ meals: MealsType[], loading?: boolean}>()
</script>