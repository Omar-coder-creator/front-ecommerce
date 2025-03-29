import { UserLoginType as UserLogin } from "../types/userTypes";
import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL

export async function login(userlogin:UserLogin){
    const response = await axios.post(`${apiurl}/auth/login`,userlogin)
    return response.data
}