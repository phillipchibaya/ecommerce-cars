import { useEffect, useState } from "react";


export default function CartPage(){

    const [cartItems, setCartItems] = useState([]);

    const getCartItems = () => {
        if ( localStorage.getItem('cart') ) {
            setCartItems(JSON.parse(localStorage.getItem('cart')));
        }
    }

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        totalCost();
    }

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    }

    useEffect(() => {
        getCartItems();
    }, [])

    return(
        <div className="page-wrapper cart-wrapper">
            <div className="cart-total-items">
                <span><strong>{cartItems.length}</strong> items in cart</span>
                { cartItems.length > 0 && <button onClick={ clearCart }>Empty Cart</button> }
            </div>
            <div className="cart-layout">
                { cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-img"><img src={item.img}  /></div>
                        <div className="cart-item-info">
                            <span>{item.car}</span>
                            <span>{item.price}</span>
                        </div>
                        <div className="cart-buttons">
                            <button onClick={ () => { removeFromCart(item.id) } }>Remove</button>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}