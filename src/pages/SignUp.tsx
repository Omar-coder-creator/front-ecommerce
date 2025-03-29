import { useRef, useState } from "react"
import { createUser } from "../api/user"
import { UserType as User } from "../types/userTypes"
import { Link } from "react-router"
const SignUp = () => {

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const [error,setError] = useState<any>(null)
    const[isCreated,setIsCreated] = useState<boolean>(false)

    const handleSignUp = async(e : {preventDefault : ()=> void})=>{
        e.preventDefault()
        try{
            const user : User = {
                name : name.current?.value || '',
                email : email.current?.value || '',
                password :password.current?.value || '',
                isAdmin : false
            }
            await createUser(user)
            setError(null)
            setIsCreated(true)
        }catch(err){
            console.log(err)
            setError(err)
        }
    }

    return (
        <div id='signup'>
            <form action="">
                <input type="text" placeholder="name" ref={name}/>
                <input type="text" placeholder="email" ref={email}/>
                <input type="text" placeholder="password" ref={password}/>
                <button onClick={handleSignUp}>Signup</button>
                {error && <p className="error">error : {error.message}</p>}
                {isCreated && <p className="succes">Account Created Succefully !</p>}
                <Link to='/login'>login if you have an account</Link>
            </form>
            
        </div>
    )
}

export default SignUp