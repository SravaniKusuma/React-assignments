
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
  const user = useContext(UserContext)
  const handleLogin = () => {
    
    user.setUser({
      name: 'Srav',
      email: 'srav@asd.com'
    })
   
  }
  const handleLogout = () => {
   
    user.setUser(null)
    
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.user?.name}</div>
     
    </div>
  )
}