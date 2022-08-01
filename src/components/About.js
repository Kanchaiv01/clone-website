import React from 'react';
import './About.css'

const About = () => {
    return (
        <>
            <section id='about'>
                <div className='container-ab'>
                    <div className='container-con-ab'>
                        <h1>What We Do?</h1>
                        <p>We Are The World Emerging VR Game Developer And Thailand <br></br>Prospected Leading VR Studio. The Area We Will Cover Is VR Game<br></br> Developer, Mobile Game & Apps, Augmented Reality Creator,<br></br>VR For Ads And All Commercial VR Modeling.</p>
                    </div>
                </div>
            </section>
            <section className='partner'>
                <div className='container-part'>
                    <div className='container-con-part'>
                        <h1>Our partner</h1>
                        <div className='container-sport'>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                            <img alt='sport-logo' src='https://metaversexr.global/images/partner.png'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer'>
                <div className='container-footer'>
                    <div className='container-con-footer'>
                        <h1>Imagination Soft VR Studio & Game Developer</h1>
                        <div>
                            <button className='btn' >Get Started Now</button>
                        </div>
                        <div className='container-contact'>
                            <div className='logo-con'>
                                <img alt='logo' src='https://metaversexr.global/images/logo.svg'></img>
                            </div>
                            <div className='address-f'>
                                <h1>Address</h1>
                                <p>236 Sathorn Mansion 1 Alley,<br></br>khwaeng Khlong Ton Sai<br></br>Khet Klong San, Bangkok<br></br>10600 Thailand</p>
                            </div>
                            <div className='contact-f'>
                                <h1>Contact</h1>
                                <p>Time : 10:00 - 19:00 น.<br></br>Tel : 0000000000<br></br>Email :<br></br>Line : @100vhgrv</p>
                            </div>
                            <div className='address-f'>
                                <h1>follow</h1>
                                <p>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-telegram"></i>
                                    <i class="fa-brands fa-line"></i>
                                    <i class="fa-brands fa-discord"></i>
                                </p>
                            <h1>© Copyright 2022 metaverseXR</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;