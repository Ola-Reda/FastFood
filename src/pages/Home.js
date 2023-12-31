import React, { useContext } from 'react'
import { Categories, Loader, Meals, NotFound } from '../components/index';
import { CategoryContext } from '../store/category-context';
import { MealContext } from '../store/meal-context';


const Home = () => {
    const ctx = useContext(CategoryContext)
    const loading = ctx.loading

    const ctxMeal = useContext(MealContext)
    const meals = ctxMeal.meals
    const mealLoading = ctxMeal.mealLoading
    const mealError = ctxMeal.error

    return (
        <>
            {mealLoading ? <Loader/> : mealError ? <NotFound/> : meals.length > 0 ? <Meals meals={meals}/> : ""}
            {loading ? <Loader/> : <Categories/>}
        </>
    )
}

export default Home;