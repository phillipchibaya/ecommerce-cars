
export default function Toast({ addedToCart }){

    return(
        <div className="toast">
            <span>Added {addedToCart.car} to cart</span>
        </div>
    )
}