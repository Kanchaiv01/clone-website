import React from 'react';
import './Services.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from 'react-slick';
import { useState } from 'react';

const Description = (props) => {

    
    return (
        <>
        <section id='services'>
            <div className='container-serv'>
                <div className='container-con-serv'>
                    <img className='logo-serv' alt='logo-serv' src='https://metaversexr.global/images/logo.svg'></img>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <div className='vrar360'>
                        <div className='vr'>
                            <img alt='vr' src='https://metaversexr.global/_next/static/media/vr.eeb1613d.svg'></img>
                            <h2>Virtual Reality<br></br>VR</h2>
                            <div>
                                <button className='btn'>read more</button>
                            </div>
                        </div>
                        <div className='ar'>
                            <img alt='ar' src='https://metaversexr.global/_next/static/media/ar.6bcd51c0.svg'></img>
                            <h2>Argument Reality<br></br>AR</h2>
                            <div>
                                <button className='btn'>read more</button>
                            </div>
                        </div>
                        <div className='threesixzero'>
                            <img alt='threesixzero' src='https://metaversexr.global/_next/static/media/Frame.cba43518.svg'></img>
                            <h2>Virtual Tour<br></br>360</h2>
                            <div>
                                <button className='btn'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* section des  */}
        <section className='des'>
            <div className='container-des'>
                <div className='container-con-des'>
                    <div className='box-l'>
                        <h1>From idea to the world of virtual reality</h1>
                        <p>Our company foundation starts from the idea that no one can make great content and real adrenaline stimulate VR Esport game until we notice that if we can make a great game from scratch, we can do anything on VR. That makes us expand to Augmented Game and VR Studio finally.</p>
                        <p><b>What next?</b><br></br>Start from making VR game, we expect to expand beyond any area of AR and VR from commercial use, Government project and all VR/AR customize.</p>
                        <div>
                            <button className='btn'>Get Started Now</button>
                        </div>
                    </div>
                    <div className='box-r'>
                        <img alt='im-des' src='https://metaversexr.global/images/Frame.png?imwidth=750'></img>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Description;