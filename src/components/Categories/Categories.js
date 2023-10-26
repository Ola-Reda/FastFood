import React, {useContext} from 'react'
import { CategoryContext } from '../../store/category-context'
import { Link } from 'react-router-dom'
import classes from './Categories.module.css'

const Categories = () => {
    const ctx = useContext(CategoryContext)
    const Categories = ctx.items
    return (
        <section className={classes.content}>
            <div className='container'>
                <h4 className="text-uppercase mb-4 fw-bold">categories</h4>
                <div className={classes.categories}>
                {
                    Categories.map(category => {
                        return <Link key={category.idCategory} className={classes['category-item']} to={`/meals/category/${category.strCategory}`}>
                                    <div>
                                        <img src={category.strCategoryThumb} className="img-fluid" alt={category.strCategory}/>
                                        <div>
                                            <h6 className="text-uppercase">{category.strCategory}</h6>
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

export default Categories;