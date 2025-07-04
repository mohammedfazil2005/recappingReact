import { useContext } from 'react'
import ButtonComp from '../buttoncomp/ButtonComp'
import './ProductCard.style.scss'
import { ProductContext } from '../../contexts/ProductContext'

const ProductCard=({product})=>{
    const {onAddToCart}=useContext(ProductContext)

    return(
        <div className='product-card-container'>
            <img src={product.imageUrl} alt="" />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <ButtonComp onClick={()=>onAddToCart(product)} buttonType={'inverted'}>Add to Cart</ButtonComp>
        </div>
    )
}

export default ProductCard