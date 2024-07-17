<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
		<MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
	</div>
	<div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
		There are no meals
	</div>
</template>

<script setup lang="ts">
	import type { MealsType } from '@/models';
import MealItem from './meal-item.vue';

	const { meals } = defineProps<{ meals: MealsType[] }>()
</script>