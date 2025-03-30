import { Link } from 'react-router'

const AdminSidebar = () => {
  return (
    <div id='admin-sidebar'>
        <Link to='/admin/products'>Products</Link>
        <Link to='/admin/users'>Users</Link>
    </div>
  )
}

export default AdminSidebar