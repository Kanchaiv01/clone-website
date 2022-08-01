import React from 'react';
import './Navbar.css'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';



const Navbar = () => {
    const [onclick, setOnclick] = useState(false)
    const handleOnclick = () => setOnclick(!onclick)

    const [onscroll, setOnscroll] = useState(false)

    window.onscroll = () => { 
        document.documentElement.scrollTop >= 100?
        setOnscroll(true): setOnscroll(false)
    }
    console.log(onscroll)
    return (
        <section className={onscroll? 'Nav-bar active': 'Nav-bar'}>
            <div className='containar-nav'>
                <div className='container-con-nav'>
                    <div className={onclick ? 'mobie-menu active' : 'mobie-menu'} onClick={handleOnclick}>
                        {onclick? <FaTimes/> : <FaBars />} 
                    </div>
                    <div className='band'>
                        <img src='https://metaversexr.global/images/logo.svg?imwidth=640' className='logo' alt='logo'></img>                        
                    </div>
                    <ul className={onclick ? 'nav active' : 'nav'}>
                        <li><a  onClick ={handleOnclick} href='#home'>Home</a></li>
                        <li><a  onClick ={handleOnclick} href='#services'>Services</a></li>
                        <li><a  onClick ={handleOnclick} href='#about'>About</a></li>
                        <li><a  onClick ={handleOnclick} href='#work'>Work</a></li>
                    </ul>
                    <div className='contact'>
                        <button className='btn'>Contact</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;