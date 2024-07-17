export interface MealsType {
	strMeal: string
	strInstructions: string
	strYoutube: string
	strMealThumb: string
	idMeal: string
	strCategory: string
	strSource: string
}

export interface MealDetails {
	strMealThumb: string
	strMeal: string
	idMeal: string
	strArea: string
	strCategory: string
	strYoutube: string
	strTags: string
	strSource: string | null
	strInstructions: string
	strIngredient1: string | null
	strIngredient2: string | null
	strIngredient3: string | null
	strIngredient4: string | null
	strIngredient5: string | null
	strIngredient6: string | null
	strIngredient7: string | null
	strIngredient8: string | null
	strIngredient9: string | null
	strIngredient10: string | null
	strIngredient11: string | null
	strIngredient12: string | null
	strIngredient13: string | null
	strIngredient14: string | null
	strIngredient15: string | null
	strIngredient16: string | null
	strIngredient17: string | null
	strIngredient18: string | null
	strIngredient19: string | null
	strIngredient20: string | null
}

export interface IngredientsType {
	idIngredient: string
	strIngredient: string
	strType: string | null
	strDescription: string
}

export interface SearchIngredients {
	meals: IngredientsType[]
}

export interface MealByIngredient {
	strMeal: string
	strThumb: string
	idMeal: string
}

export interface SearchByIngredient {
	items: MealsType[]
	ingredient: string | null
}
