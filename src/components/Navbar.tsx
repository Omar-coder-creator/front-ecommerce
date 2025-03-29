import { Link } from 'react-router-dom'
import useAuth from '../utilities/useAuth'
const Navbar = () => {

    const { authInfo, logout } = useAuth()

    return (
        <nav>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <Link to='/'><img src="shopping.png" alt="" />ShopMate</Link>
                    </div>
                    <ul className="nav-links">
                        
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        {authInfo?.isAdmin && <Link to='/admin'>Admin Space</Link>}
                    </ul>
                    <div className="auth-links">
                        {authInfo
                            ? (<a onClick={logout} href='/'>logout</a>)
                            : (<><Link to='/login'>Login</Link><Link to='/signup'>Signup</Link></>)
                        }
                    </div>
                    <div className="cart">
                        {authInfo?.isAdmin == false && <Link to='/cart'>🛒 Cart</Link>}
                    </div>
                </nav>
            </header>
        </nav>
    )
}

export default Navbar