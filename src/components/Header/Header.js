import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {IoMdMenu} from 'react-icons/io'
import {MdFoodBank} from 'react-icons/md'
import classes from './Header.module.css'


const Header = (props) => {
    const [scroll, setScroll] = useState(false);
    
    const scrollHandler = () => {
        if(window.scrollY >= 45){
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.onscroll = scrollHandler
    }, [])

    return (
        <header className={`${classes.header} ${scroll ? classes['header-fixed']: "" }`}>
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center text-white fw-medium" to="/">
                        <MdFoodBank/> 
                        <span className="ms-1 fw-semibold">FastEat.</span>
                    </Link>
                    <button className="btn text-white" onClick={props.toggleSidebar}>
                        <IoMdMenu size={27}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;