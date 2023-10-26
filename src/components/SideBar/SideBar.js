import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import classes from './SideBar.module.css'
import { CategoryContext } from '../../store/category-context'

const SideBar = (props) => {    
    const ctx = useContext(CategoryContext)
    const categories = ctx.items


    return (
        <div className={`${classes["sidebar-content"]} ${props.toggle ? classes.openSidebar : classes.closeSidebar}`}> 
            <ul  className='list-unstyled mt-5'>
            {
                categories.map(category => {
                    return  <li key={category.idCategory}>
                                <Link to={`/meals/category/${category.strCategory}`} className="text-decoration-none" onClick={props.toggleSidebar}>{category.strCategory}</Link>
                            </li>
                })
            }
            </ul>
        </div>
    )
}

export default SideBar;