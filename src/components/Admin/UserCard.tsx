import { UserType } from '../../types/userTypes'
import { CartType } from '../../types/cartTypes'

const UserCard = ({user,cart}:{user:UserType , cart : CartType | undefined}) => {
  return (
    <div className='user-card'>
        <div className="userinfo">
            <div className="user-details">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>role : {user.isAdmin ? 'Admin' : 'User'}</p>
            </div>
        </div>
        <div className="user-cart">
            <p>items number : {cart ?cart.items.length : 'no data'}</p>
            <p>total : {cart ? cart.total: 'no data'}</p>
        </div>
    </div>
  )
}

export default UserCard