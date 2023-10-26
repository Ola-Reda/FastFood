import React, {useState, useContext} from 'react'
import {BsSearch} from 'react-icons/bs'
import { MealContext } from '../../store/meal-context'
import { useNavigate } from 'react-router-dom'
import classes from './SearchForm.module.css'


const SearchForm = () => {
    const [searchItem, setSearchItem] = useState('')
    const ctx = useContext(MealContext)
    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        ctx.getMeals(searchItem)
        navigate('/')
        setSearchItem("")
    }

    const inputHandler = (e) => {
        setSearchItem(e.target.value)
    }

    return (
        <form className="mb-3 d-flex align-items-center justify-content-center" onSubmit={submitHandler}>
            <input className={`me-3 rounded-pill ${classes["search-input"]}`} type="text" value={searchItem} placeholder='Search recipes here ...' 
            onChange={inputHandler}
            />
            <button className={`d-flex align-items-center justify-content-center rounded-circle ${classes["search-btn"]}`}>
                <BsSearch size={20}/>
            </button>
        </form>
    )
}

export default SearchForm;