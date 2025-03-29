import { ProductType as Product } from "../types/productTypes";

import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL

export async function getProducts(){
    const response = await axios.get(`${apiurl}/products`)
    return response.data
}

export async function getProduct(id:string){
    const response = await axios.get(`${apiurl}/products/${id}`)
    return response.data
}

export async function createProduct(product:Product){
    const response = await axios.post(`${apiurl}/products`,product)
    return response.data
}

export async function updataProduct(id:string,product:Product){
    const response = await axios.put(`${apiurl}/products/${id}`,product)
    return response.data
}

export async function deleteProduct(id:string){
    const response = await axios.delete(`${apiurl}/products/${id}`)
    return response.data
}