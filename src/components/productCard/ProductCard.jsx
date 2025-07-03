import ButtonComp from '../buttoncomp/ButtonComp'
import './ProductCard.style.scss'

const ProductCard=({product})=>{
    return(
        <div className='product-card-container'>
            <img src={product.imageUrl} alt="" />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <ButtonComp buttonType={'inverted'}>Add to Cart</ButtonComp>
        </div>
    )
}

export default ProductCard