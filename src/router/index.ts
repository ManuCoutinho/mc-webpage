import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home-view.vue'
import Ingredients from '@/views/ingredients-view.vue'
import MealDetails from '@/views/meal-details-view.vue'
import MealIngredient from '@/views/meal-ingredient-view.vue'
import MealLetter from '@/views/meal-letter-view.vue'
import MealName from '@/views/meal-name-view.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/meal/:id',
		name: 'mealDetails',
		component: MealDetails
	},
	{
		path: '/ingredients',
		name: 'ingredients',
		component: Ingredients
	},
	{
		path: '/by-ingredients/:ingredient',
		name: 'byIngredient',
		component: MealIngredient
	},
	{
		path: '/by-name/:name?',
		name: 'byName',
		component: MealName
	},
	{
		path: '/by-letter/:letter',
		name: 'byLetter',
		component: MealLetter
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router


