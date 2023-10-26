import React from 'react' 
import { Link } from 'react-router-dom';
import classes from './Meals.module.css'

const Meals = (props) => {
    const meals = props.meals

    
    return (
        <section className={classes.content}>
        <div className="container">
            <h4 className='text-uppercase mb-4 fw-bold'>meals</h4>
            <div className={classes.meals}>
            {
                meals.map(meal => {
                    return <Link key={meal.idMeal} className={classes["meal-item"]} to={`/meals/${meal.idMeal}`}>
                                <div>
                                    <div className={classes["item-image"]}>
                                        <img src={meal.strMealThumb} className="img-fluid" alt={meal.strMeal}/>
                                    </div>
                                    <div className={classes["item-name"]}>
                                        {meal.strCategory}
                                    </div>
                                    <div className={classes["item-body"]}>
                                        <span className="fw-semibold">{meal.strArea}</span>
                                        <p className="mt-1 mb-1 fw-bolder">{meal.strMeal}</p>
                                    </div>
                                </div>
                            </Link>
                })
            }
            </div>
        </div>
        </section>
    )
}

export default Meals;