import { useEffect, useState } from 'react';
import products from '../assets/products.json';
import ProductCard from '../components/ProductCard';
import Toast from '../components/Toast';

export default function Products(){

    const [results, setResults] = useState(0);
    const [cart, setCart] = useState([]);
    const [addedToCart, setToAddToCart] = useState({});
    const [status, setStatus] = useState(false);

    function addToCart(product){
        // Check if the product is already in the cart
        const isProductInCart = cart.some(item => item.id === product.id);

        // If the product is not in the cart, add it
        if (!isProductInCart) {
            setCart([...cart, product]);
            setToAddToCart(product);
            setStatus((prev) => !prev);
            setTimeout(() => {
                setStatus(false);
            }, 3000);
        }
    }

    function removeFromCart(productId){
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        setToAddToCart('Removed product from cart');
        setStatus((prev) => !prev);
        setTimeout(() => {
            setStatus(false);
        }, 3000);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    useEffect(() => {
        setResults(products.length);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [products, cart]);

    return(
        <div className="page-wrapper">
            <div className="products-count">
                <span>Showing <strong>{results}</strong> cars</span>
            </div>
            <div className="product-grid">
            {   
                products.map(product => (
                    <ProductCard key={product.id} product={ product } addToCart={ addToCart } />
                ))
            }
            </div>
            { status && <Toast addedToCart={ addedToCart } /> }
        </div>
    )
}