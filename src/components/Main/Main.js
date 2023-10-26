import React from 'react'
import SearchForm from './SearchForm'
import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.main}>
        <SearchForm/>
            <h1 className="text-white mt-2">what are your favourite cuisines?</h1>
            <p className="text-white text-uppercase mt-2">personalize your experience</p>
        </main>
    )
}

export default Main