import { NavLink, useLocation } from 'react-router-dom';

export default function ProductDetails(){

    const location = useLocation();
    const product = location.state.product;

    return(
        <div className="page-wrapper">
            <div className="back-to-products">
                <NavLink className="btn" to="/products" title='Back to Products'>Back To Products</NavLink>
            </div>
            <div className="product-details">
                <div className="product-img">
                    <img src={product.img} alt="" />
                </div>
                <div className="product-info">
                    <section className="product-title-cost">
                        <h1>{product.car}</h1>
                        <span>{product.price}</span>
                    </section>
                    <section className="product-stats">
                        <div className="product-stats-row">
                            <span>Manufactured</span>
                            <span>{product.year}</span>
                        </div>
                        {product.body && 
                        <div className="product-stats-row">
                            <span>Body</span>
                            <span>{product.body}</span>
                        </div>}
                        {product.driveTerrain && 
                        <div className="product-stats-row">
                            <span>Drive Terrain</span>
                            <span>{product.driveTerrain}</span>
                        </div>}
                        {product.transmission && 
                        <div className="product-stats-row">
                            <span>Transmission</span>
                            <span>{product.transmission}</span>
                        </div>}
                        {product.power && 
                        <div className="product-stats-row">
                            <span>Power</span>
                            <span>{product.power}</span>
                        </div>}
                        {product.torque && 
                        <div className="product-stats-row">
                            <span>Torque</span>
                            <span>{product.torque}</span>
                        </div>}
                        {product.engine && 
                        <div className="product-stats-row">
                            <span>Engine</span>
                            <span>{product.engine}</span>
                        </div>}
                    </section>
                </div>
            </div>
        </div>
    )
}