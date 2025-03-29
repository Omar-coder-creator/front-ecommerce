import { useEffect, useState } from "react"
import { ProductType } from "../../types/productTypes"
import { deleteProduct, getProducts } from "../../api/product"
import ProductForm from "./ProductForm"

const AdminProducts = () => {
    const [products, setProducts] = useState<ProductType[]>()
    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleDelete = async (id: string | undefined) => {
        if (!id) return 
        await deleteProduct(id)
        setProducts(products?.filter((product: ProductType) => product._id !== id))
    }
    return (
        <div id="admin-products">

            {
                products?.map((product: ProductType) => (
                    <div className="admin-product" key={product._id}>
                        <div className="image-container">
                            <img src={product.imageUrl} alt="Product Image" />
                            <span className="category">{product.category}</span>
                        </div>
                        <button className="delete-product" onClick={() => handleDelete(product._id)}>Delete Product</button>
                    </div>
                ))
            }
            <ProductForm products={products} setProducts={setProducts} />
        </div>

    )
}

export default AdminProducts