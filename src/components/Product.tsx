import { Link } from "react-router"
import { addProduct } from "../api/cart"
import { useCartContext } from "../context/CartContext"
import { ProductType } from "../types/productTypes"

const Product = ({ product }: { product: ProductType }) => {
    const [cart,setCart] = useCartContext()

    const handleAddToCart = async()=>{
        if(!product._id) return 
        const res = await addProduct(cart._id,product._id)
        setCart(res)
    }
    return (
        <div className="product-item">
            
            <div className="image-container">
                <Link to={`/productdetails/${product._id}`}><img src={product.imageUrl} alt="Product Name" /></Link>
                <span className="category">{product.category}</span>
            </div>

            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="description">
                    {product.description}
                </p>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>




    )
}

export default Product