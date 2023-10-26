import React, {useEffect, useState} from 'react'

export const CategoryContext = React.createContext({
    items: [], 
    loading: true,
})

const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCategoryHandler()
    }, [])

    const fetchCategoryHandler = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            if(!response.ok) {
                throw new Error('some thing wrong')
            }
            const data = await response.json()
            setCategories(data.categories)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const contextValue = {
        items: categories, 
        loading: loading,
    }

    return (
        <CategoryContext.Provider value={contextValue}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;