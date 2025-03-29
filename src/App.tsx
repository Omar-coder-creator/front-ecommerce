import './App.css'
import Login from './pages/Login'
import { Routes, Route } from 'react-router'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import CartContextProvider from './context/CartContext'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'
function App() {

    return (
        <div id='app'>
            <Navbar />
            <CartContextProvider >
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/productdetails/:id' element={<ProductDetails/>}/>
                    <Route path='/admin/*' element={<Admin/>}/>
                </Routes>
            </CartContextProvider>

        </div>
    )
}

export default App
