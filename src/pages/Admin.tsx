import AdminProducts from "../components/Admin/AdminProducts"
import AdminSidebar from "../components/Admin/AdminSidebar"
import { Routes, Route } from "react-router"
import Users from "../components/Admin/Users"
import useAuth from "../utilities/useAuth"
const Admin = () => {
    const {authInfo} = useAuth()
    if(!authInfo?.isAdmin) return <h1>Not authorized</h1>
    return (
        <div id="admin-page">
            <AdminSidebar />
            <Routes>
                <Route path='products' element={<AdminProducts />} />
                <Route path='users' element={<Users />} />
                <Route path='carts' element={<h1>Carts</h1>} />
            </Routes>
        </div>
    )
}

export default Admin