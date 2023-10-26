import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Meals, Loader } from '../components/index';
import { CategoryContext } from '../store/category-context'


const MealCategory = () => {
    const params = useParams()
    const categoyName = params.name
    const ctx = useContext(CategoryContext)

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetchMealByCategoryHandler(categoyName)
    }, [categoyName])

    const fetchMealByCategoryHandler = async (name) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            if(!response.ok) {
                throw new Error ('some thing wrong')
            }
            const data = await response.json()
            setCategory(data.meals)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            {
                ctx.items.map(item  => {
                    return  item.strCategory ===  categoyName && 
                        <section key={item.idCategory} className='details-box mt-5'>
                            <div className='container'>
                                <div className='box p-4'>
                                    <h4 className='fw-bold orange mb-3'>{item.strCategory}</h4>
                                    <p className="mb-0">{item.strCategoryDescription}</p>
                                </div>
                            </div>
                        </section>
                })
            }
            { category.length === 0 ? <Loader/> : <Meals meals={category}/>}
        </>
    )
}

export default MealCategory;