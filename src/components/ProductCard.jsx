import { NavLink } from "react-router-dom";


export default function ProductCard({ product }){
    return(
        <div className="product" key={product.id}>
            <img src={product.img} alt={product.car} />
            <section className="product-data">
                <div className="product-title">
                    <span>{product.car}</span>
                </div>
                <div className="product-cost">
                    <span>{product.price}</span>
                </div>
            </section>
            <section className="product-buttons">
                <button className="btn btn-add" title={`Add ${product.car} to cart`}>Add To Cart</button>
                <NavLink to={`/products/${product.id}`} state={{ product: product }} className="btn btn-view" title={`View more about ${product.car}`}>View More</NavLink>
            </section>
        </div>
    )
}