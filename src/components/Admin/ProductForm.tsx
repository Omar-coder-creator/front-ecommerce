import { useRef, useState } from "react"
import { Category } from "../../types/categories"
import { ProductType } from "../../types/productTypes"
import { createProduct } from "../../api/product"
const ProductForm = ({ products, setProducts }: { products: ProductType[] | undefined, setProducts: React.Dispatch<React.SetStateAction<ProductType[] | undefined>> }) => {

    const [error, setError] = useState<string>('')

    const name = useRef<HTMLInputElement>(null)
    const price = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null)
    const imageUrl = useRef<HTMLInputElement>(null)
    const category = useRef<HTMLSelectElement>(null)

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        if (! name.current || !price.current || !category.current) return setError('missing required values')
        const product: ProductType = {
            name: name.current.value,
            price: Number(price.current?.value),
            description: description.current?.value,
            imageUrl: imageUrl.current?.value,
            category: category.current?.value,
            stock: 1

        }
        console.log(imageUrl.current?.value)
        const data = await createProduct(product)
        if (!products) return
        setProducts([...products, data])
    }

    return (
        <form action="">
            <input type="text" placeholder="name" ref={name} />
            <input type="number" placeholder="price" ref={price} />
            <textarea name="" id="" placeholder="description" ref={description}></textarea>
            <input type="text" placeholder="imageUrl" ref={imageUrl} />
            <select name="" id="" ref={category}>
                <option value={Category.ACCESSORIES}>Accessories</option>
                <option value={Category.SPORTS}>Sports</option>
                <option value={Category.SPORTSWEAR}>Sportswear</option>
                <option value={Category.ELECTRONICS}>Electronics</option>
                <option value={Category.FURNITURE}>Furniture</option>
            </select>
            {error && <p className="error">{error}</p>}
            <button onClick={handleAddProduct} className="add-product">Add Product</button>
        </form>
    )
}

export default ProductForm