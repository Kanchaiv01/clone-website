import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css'

const Carousel = (props) => {
    const [img01, img02, img03, img04, img05, img06] = props.images
    const images = [img01, img02, img03, img04, img05, img06]

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive:[{
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }],
        beforeChange: (current, next) => setImageIndex(next),
        
    };

    const massageheader = (index) =>{
        if(index === 0) {
            return 'World First Jurasic Vr tour'
        }
        else if(index === 1){
            return '5 TIGERS CHINESE NEW YEAR'
        }
        else if(index === 2){
            return 'OPEN HOUSE IN METAVERSE'
        }
        else if(index === 3){
            return 'THE MALL GROUP'
        }
        else if(index === 4){
            return 'TOWNHALL X METAVERSE'
        }
        else if(index === 5){
            return 'VIRTUAL TELEMEDICAL'
        }
    }

    const runImage = (img) =>{
        return console.log(toString(img) );
    }

    return (
        <>
        <section id='work' className='Portfolio'>
            <div className='container-port'>
                <div className='container-con-port'>
                    <h1>Portfolio</h1>
                    <div className="carousel">
                        <Slider {...settings} className='box-carousel'>
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                    <div className='card'>     
                                        <img src={img} alt={img} />
                                        <h1>{massageheader(idx)}</h1>
                                        <div>
                                            <button className= {'btn ' + runImage} onClick={runImage(idx)}>Read more</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
        <section className='form'>
        <div className='container-form'>
            <div className='container-con-form'>
                <h1>CONTACT</h1>
                <div className='container-contact'>
                    <div className='address'>
                        <p><i class="fa-solid fa-location-dot"></i>36 Sathorn Mansion 1 Alley,Khwaeng khlong Ton Sai<br></br><br></br> Khet Khlong San, Bangkok<br></br><br></br> 10600 Thailand</p>
                        <p><i class="fa-solid fa-phone"></i>Tel. 0000000</p>
                        <p><i class="fa-solid fa-clock"></i>เวลาทำการ 10:00 - 19:00น.</p>
                        <p><i class="fa-solid fa-envelope"></i>Email xxx@mail.com</p>
                        <p><i class="fa-brands fa-line"></i>@100yhgrv</p>
                    </div>
                    <div className='form-R'>
                        <form>
                            <div>
                                <label>
                                    Subject:
                                    <input className='inputText' type="text" name="name" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Name:
                                    <input className='inputText' type="text" name="name" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input className='inputText' type="text" name="name" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Message:
                                    <input className='inputText' type="text" name="name" />
                                </label>
                            </div>
                            <div>
                                <input className='btn' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
    );
};

export default Carousel;

