import { useEffect, useState } from 'react';
import products from '../assets/products.json';
import ProductCard from '../components/ProductCard';

export default function Products(){

    const [results, setResults] = useState(0);

    useEffect(() => {
        setResults(products.length);
    }, [products])

    return(
        <div className="page-wrapper">
            <div className="products-count">
                <span>Showing <strong>{results}</strong> cars</span>
            </div>
            <div className="product-grid">
            {   
                products.map(product => (
                    <ProductCard key={product.id} product={ product } />
                ))
            }
            </div>
        </div>
    )
}