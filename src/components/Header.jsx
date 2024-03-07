import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header(){

    const accordionRef = useRef();
    const [menuClicked, setMenuClicked] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const updateOnClick = () => {

        setMenuClicked((prev) => !prev);

        let headerRight = accordionRef.current;
        if ( headerRight.style.maxHeight ) {
            headerRight.style.maxHeight = null;
        }else{
            headerRight.style.maxHeight = `${headerRight.scrollHeight}px`;
        }

    }

    const updateMenuIconState = () => {
        setMenuClicked(false);
        accordionRef.current.style.maxHeight = null;
    }

    const updateCartCount = (value) => {
        setCartCount(value);
    }

    useEffect(() => {
        // Fetch the cart items from localStorage and update the cart count
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartCount(storedCart.length);
    }, []);

    return(
        <header>
            <div className="header-left">
                <NavLink to='/' title="Carsales" aria-label="Icon link to homepage">
                    <img src='../public/icons/icon-car.svg' alt="Logo"></img>
                    <span>Carsales</span>
                </NavLink>
                <button className={menuClicked ? 'menu-icon active-menu' : 'menu-icon'} onClick={updateOnClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className="header-right" ref={accordionRef}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" title="Home" className={ ( { isActive } )  => isActive ? 'active-link' : '' } onClick={updateMenuIconState}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" title="Products" className={ ( { isActive } )  => isActive ? 'active-link' : '' } onClick={updateMenuIconState}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" title="About" className={ ( { isActive } )  => isActive ? 'active-link' : '' } onClick={updateMenuIconState}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" title="Cart" className={ ( { isActive } )  => isActive ? 'active-link' : '' } onClick={updateMenuIconState}>
                                {/* <span className="cart-counter">{cartCount}</span> */}
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}