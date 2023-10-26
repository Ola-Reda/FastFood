import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiOutlineCheckSquare } from 'react-icons/ai';
import classes from './SingleMeal.module.css'

const SingleMeal = (props) => {
    const meal = props.meal;
    let ingredientArr = [], measureArr = []
    let instructions = meal?.strInstructions?.split('\r\n')
    for(let key in meal){
        if(key.includes('strIngredient') && meal[key]?.length !== 0 ) {
            ingredientArr.push(meal[key])
        }

        if(key.includes('strMeasure') && meal[key] !== " " ) {
            measureArr.push(meal[key])
        }
    }

    
    return (
        <section className={classes["single-meal"]}>
        <div className="container">
            <div className={`${classes["meal-head"]} text-white p-3 mb-4`}>
                <ul className='list-unstyled d-flex align-items-center mb-0'>
                    <li><Link to="/" className="text-white d-flex align-items-center"><AiFillHome size = {22}/></Link></li>
                    <li><BiChevronsRight size = {24} className='mx-1'/></li>
                    <li><span className="text-uppercase fw-medium">{meal.strMeal}</span></li>
                </ul>
            </div>
            <h4 className={`${classes.title} text-uppercase my-5 fw-bold`}>meal details</h4>
            <div className={classes.meal}>
                <div className='row'>
                    <div className="col-lg-6">
                        <div>
                            <img src={meal.strMealThumb} className='img-fluid' alt={meal.strMeal}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${classes["meal-details"]} mt-4 ms-md-4`}>
                            <h4 className='orange fw-bold pb-3'>{meal.strMeal}</h4>
                            <p className='text-uppercase mt-4 mb-1'>
                                <span className='fw-bold pe-1'>category: </span>
                                <span>{meal.strCategory}</span>
                            </p>
                            <p className="mb-4">
                                <span className='fw-bold text-capitalize pe-1'>source: </span>
                                <a href={meal.strSource} target="blank" className="text-black text-decoration-none">{meal.strSource ? (meal?.strSource).substring(0, 40) + "..." : "Not Found" }</a>
                            </p>
                            <h6 className='fw-bold text-capitalize mb-4'>
                                tags: 
                                <span>{meal.strTags? meal.strTags : "No Tags" }</span>
                            </h6>
                            <div className={classes.ingredients}>
                                <h6 className='fw-bold text-capitalize text-light mb-2'>ingredients</h6>
                                <ul className='ms-0 list-unstyled'>
                                {
                                    ingredientArr.map((item, index) => {
                                        return  item?.length > 1 && <li key={index} className="d-flex align-items-center">
                                                    <span className={classes.icon}>{index+1}</span>
                                                    <span className={classes.item}>{item}</span>
                                                </li>
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.measure} mt-5 mb-4`}>
                    <h6 className="text-capitalize fw-bold mb-3">measure:</h6>
                    <ul className="list-unstyled">
                    {
                        measureArr.map((item, index) => {
                            return  item?.length > 1 && <li key={index} className="d-flex align-items-center">
                                                            <FaUtensilSpoon size = {12} className="orange me-2" />
                                                            <span className="fw-medium">{item}</span>
                                                        </li>
                        })
                    }
                    </ul>
                </div>
                <div className={classes.instructions}>
                    <h6 className="text-capitalize fw-bold">instructions:</h6>
                    <ul className="list-unstyled">
                    {instructions?.map((instruction, index) => {
                        return  instruction?.length > 0 && <li key={index} className='mb-2'>
                                                            <AiOutlineCheckSquare size = {16} className="orange me-2"/>
                                                            <span className='fw-medium'>{instruction}</span>
                                                        </li>
                    })}
                    </ul>
                </div>
            </div>
        </div>
        </section>
    )
}

export default SingleMeal;