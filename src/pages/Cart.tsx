import CartProduct from '../components/CartProduct'
import { useCartContext } from '../context/CartContext'
import { CartItemType } from '../types/cartTypes'

const Cart = () => {
    const [cart] = useCartContext()
    
    if(!cart) return <p>no cart</p>
    if(cart.items.length == 0) return <p>cart is emty</p>
    return (
        <div>
            {
                cart.items.map((item : CartItemType) => (
                    <CartProduct productId={item.productId} quantity={item.quantity} key={item.productId}/>
                ))
            }
        </div>
    )
}

export default Cart