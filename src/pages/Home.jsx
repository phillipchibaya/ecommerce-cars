import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Home(){

    const sliderImages = useRef();
    const [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        setCounter(counter - 1);
        if ( counter <= 0) {
            setCounter(0);
        }
    }

    const incrementCounter = () => {
        setCounter(counter + 1);
        const imageList = sliderImages.current.childNodes;
        if ( counter >= imageList.length - 1 ) {
            setCounter(imageList.length - 1);
        }
    }

    const setLeftPositionForSliderImages = () => {
        const sliders = Array.from(sliderImages.current.childNodes);
        sliders.forEach((slider, index) => {
            slider.style.left = `${index * 100}%`;
        });
    }

    const changeSlide = () => {
        console.log(counter);
        const sliders = Array.from(sliderImages.current.childNodes);
        sliders.forEach(slider => {
            slider.style.left = `-${counter * 100}%`;
        });
    }

    useEffect(() => {
        setLeftPositionForSliderImages();
    });

    return(
        <div className="page-wrapper no-padding">
            <section className="hero-banner">
                <video src="../../public/videos/drift.mp4" muted playsInline autoPlay loop></video>
                <div className="hero-banner-text">
                    <span>Buy Your Next Car</span>
                    <div className="tagline">
                        <span><strong>L</strong>uxury</span>
                        <span><strong>P</strong>erformance</span>
                    </div>
                </div>
            </section>
            <section className="hero-slider">
                <div className="slider-images" ref={sliderImages}>
                    <div className="slider-image">
                        <img src="../../public/slider/eurocars.jpg" />
                    </div>
                    <div className="slider-image">
                        <img src="../../public/slider/sales.jpg" />
                    </div>
                    <div className="slider-image">
                        <img src="../../public/slider/servicing.jpg" />
                    </div>
                    <div className="slider-image">
                        <img src="../../public/slider/vintage.jpg" />
                    </div>
                </div>
                <div className="hero-slider-buttons">
                    {counter}
                    <button onClick={decrementCounter}>Prev</button>
                    <button onClick={incrementCounter}>Next</button>
                </div>
            </section>
            <section className="padding">
                <article>
                    <h2>Brands We Sell</h2>
                    <div className="brand-grid">
                        <div className="brand">
                            <img src="../../public/brands/audi.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/bmw.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/ford.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/jeep.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/mercedes.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/porsche.svg" />
                        </div>
                        <div className="brand">
                            <img src="../../public/brands/volkswagen.svg" />
                        </div>
                    </div>
                </article>
                <div className="shop-now-button">
                    <NavLink to="/products" title="Shop Now" className="btn">Shop Now</NavLink>
                </div>
            </section>
        </div>
    )
}

export default Home;