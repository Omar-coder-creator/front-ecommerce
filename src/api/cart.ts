import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL

export async function getCart(userId:string){
    const response = await axios.get(`${apiurl}/cart/${userId}`)
    return response.data
}

export async function emptyCart(id:string){
    const response = await axios.put(`${apiurl}/cart/empty/${id}`)
    return response.data
}

export async function addProduct(id:string,productId:string){
    const response = await axios.put(`${apiurl}/cart/${id}/add-product/${productId}`)
    return response.data
}

export async function removeProduct(id:string,productId:string){
    const response = await axios.put(`${apiurl}/cart/${id}/remove-product/${productId}`)
    return response.data
}

export async function updataQuantity(id:string,productId:string,quantity:number){
    const response = await axios.put(`${apiurl}/cart/${id}/quantity/${productId}`,{quantity})
    return response.data
}