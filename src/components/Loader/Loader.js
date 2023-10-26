import React from 'react'
import loader from '../../assets/loader.svg'


const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5">
            <img className="loader-image" src={loader} alt="loader"/>
        </div>
    )
}

export default Loader;