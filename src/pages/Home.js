import React, { useContext } from 'react'
import Categories from '../components/Categories/Categories';
import { CategoryContext } from '../store/category-context';
import Loader from '../components/Loader/Loader'
import { MealContext } from '../store/meal-context';
import Meals from '../components/Meals/Meals';
import NotFound from '../components/NotFound/NotFound'

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