import { useEffect, useState } from "react"
import { ProductType } from "../types/productTypes"
import { getProduct } from "../api/product"
import { useCartContext } from "../context/CartContext"
import { removeProduct, updataQuantity } from "../api/cart"


const CartProduct = ({ productId, quantity }: { productId: string, quantity: number }) => {

    const [product, setProduct] = useState<ProductType>()

    const [cart , setCart] = useCartContext()

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(productId)
            setProduct(data)
        }
        fetchProduct()
    }, [])

    const handleremove = async ()=>{
        const data = await removeProduct(cart._id,productId)
        setCart(data) 
    }

    const handleAddQuantity = async()=>{
        const res = await updataQuantity(cart._id,productId, quantity+1 )
        setCart(res)
    }

    const handleSubQuantity = async()=>{
        const res = await updataQuantity(cart._id,productId, quantity-1 )
        setCart(res)
    }

    return (
        <div>
            <div className="product-item cart">
                <div className="image-container">
                    <img src={product?.imageUrl} alt="Product Name" />
                    <span className="category">{product?.category}</span>
                </div>

                <div className="product-info">
                    <h3>{product?.name}</h3>
                    <p className="price">{product?.price}</p>
                    <div className="quantity">
                        <button onClick={handleAddQuantity}>+</button>
                        <p>{quantity}</p>
                        <button onClick={handleSubQuantity}>-</button>
                    </div>

                </div>
            </div>
            <button className="remove-btn" onClick={handleremove}>Remove Product</button>
        </div>
    )
}

export default CartProduct