import { UserType } from '../../types/userTypes'
import { CartType } from '../../types/cartTypes'

const UserCard = ({ user, cart }: { user: UserType, cart: CartType | undefined }) => {
  return (
    <tr className='user-row'>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.isAdmin ? 'Admin' : 'User'}</td>
      <td>{cart ? cart.items.length : 'no data'}</td>
      <td>{cart ? cart.total : 'no data'}</td>
    </tr>
  )
}

export default UserCard