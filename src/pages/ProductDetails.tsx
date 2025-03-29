import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductType } from "../types/productTypes"
import { getProduct } from "../api/product"
import { useCartContext } from "../context/CartContext"
import { addProduct } from "../api/cart"

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductType>()
    const [cart, setCart] = useCartContext()

    const handleAddToCart = async () => {
        if(!id)return
        const res = await addProduct(cart._id,id)
        setCart(res)
    }
    useEffect(() => {
        async function fetchProduct() {
            if (!id) return
            const data = await getProduct(id)
            setProduct(data)
        }
        fetchProduct()
    },[])
    if (!product) return <h1>Loading ...</h1>
    return (
        <div className="product-details">
            <div className="product-item details">
                <div className="image-container">
                    <img src={product.imageUrl} alt="Product Name" />
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
        </div>
    )
}

export default ProductDetails