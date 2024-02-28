import products from '../assets/products.json';
import ProductCard from '../components/ProductCard';

export default function Products(){

    return(
        <div className="page-wrapper">
            <div className="product-grid">
            {   
                products.map(product => (
                    <ProductCard product={ product } />
                ))
            }
            </div>
        </div>
    )
}