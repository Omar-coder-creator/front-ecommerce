import { useEffect, useState } from 'react'
import { ProductType } from '../types/productTypes'
import Product from '../components/Product'
import { getProducts } from '../api/product'
import Sidebar from '../components/Sidebar'
import { Category } from '../types/categories'

const Shop = () => {
    const [category,setCategory] = useState<Category>(Category.ALL)
    const [products, setProducts] = useState<ProductType[]>([])
    const [FiltredProducts, setFiltredProducts] = useState<ProductType[]>([])
    
    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data)
            setFiltredProducts(data)
        }
        fetchProducts()
    }, [])

    useEffect(()=>{
        category === Category.ALL ? setFiltredProducts(products)
        :setFiltredProducts(products.filter(prod => prod.category == category))
    },[category])
    return (
        <div className="products-page">
            <Sidebar category={category} setCategory={setCategory} />
            <div id='products'>
                {
                    FiltredProducts.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>

    )
}

export default Shop