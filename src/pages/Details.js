import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import SingleMeal from '../components/Meals/SingleMeal'
import Categories from '../components/Categories/Categories';
import Loader from '../components/Loader/Loader'
import { CategoryContext } from '../store/category-context';


const MealDetails = () => {
    const params = useParams();
    const [singleMeal, setSingleMeal] = useState([])
    const [load, setLoad] = useState(true)
    const ctx = useContext(CategoryContext)

    useEffect(() => {
        fetchSingleMealHandler(params.mealId)
    }, [params.mealId])

    const fetchSingleMealHandler = async (id) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            if(!response.ok) {
                throw new Error ('some thing wrong')
            }
            const data = await response.json()
            setSingleMeal(data.meals[0])
            setLoad(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            {load ? <Loader/> : <SingleMeal meal={singleMeal}/>}
            {ctx.loading ? <Loader/> : <Categories/>}
        </>
    )
}

export default MealDetails;