import { useState } from 'react'
import useAuth from '../utilities/useAuth'
import { Link, useNavigate } from 'react-router'


const Login = () => {
    const nav = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<any>(null)
    const[isLogged,setIsLogged] = useState<boolean>(false)
    const { login } = useAuth()

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await login({ email, password })
            setError(null)
            setIsLogged(true)
        } catch (err) { setError(err) }

    }
    const gohome = ()=>{
        nav('/')
        window.location.reload()
    }

    return (
        <div id='login'>
            <form action="">
                <input type="text"
                    placeholder='Email :'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text"
                    placeholder='Password :'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>login</button>
                {error && <p className='error'>{error.message}</p>}
                {isLogged && gohome() }
                <Link to='/signup'>dont have an account signup now</Link>
            </form>
            
        </div>
    )
}

export default Login