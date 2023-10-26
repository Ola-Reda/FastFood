import React, {useState} from 'react'

export const MealContext = React.createContext({
    meals: [],
    getMeals: () => {},
    mealLoading: false, 
    error: '',
})

const MealProvider = (props) => {
    const [meals, setMeals] = useState([])
    const [mealLoading, setMealLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchMealsHandler = async item => {
        try {
            setMealLoading(true)
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
            if(!response.ok) {
                throw new Error('some thing wrong')
            }
            const data = await response.json()
            setMeals(data.meals)
            setMealLoading(false)
        }catch (error) {
            setMealLoading(false)
            setError(error.message)
        }
    }
    
    const contextData = {
        meals: meals,
        getMeals: fetchMealsHandler,
        mealLoading: mealLoading, 
        error: error,
    }

    return(
        <MealContext.Provider value={contextData}>
            {props.children}
        </MealContext.Provider>
    )
}

export default MealProvider;

