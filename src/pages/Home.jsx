import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Home(){

    const sliderImagesData = [
        { image: '../../public/slider/eurocars.jpg', title: 'European Sportcars' },
        { image: '../../public/slider/sales.jpg', title: 'Discount Deals' },
        { image: '../../public/slider/servicing.jpg', title: 'Cheap Service Intervals' },
        { image: '../../public/slider/vintage.jpg', title: 'Vintage Collection' }
    ]
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
                {sliderImagesData.map((slider, index) => (
                    <div key={index} className={(counter === index) ? 'slider-image active-slider' : 'slider-image'} >
                        <img src={slider.image}  />
                        <span>{slider.title}</span>
                    </div>
                ))
                }
                </div>
                <div className="hero-slider-buttons">
                    <button className="btn" onClick={decrementCounter}>&#8592;</button>
                    <button className="btn" onClick={incrementCounter}>&#8594;</button>
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