import axios from "axios";

export const addProduct=async(data)=>{
    return await axios.post('https://product-server-0eq9.onrender.com/product',data)
 }

 export const getProduct=async()=>{
    return await axios.get('https://product-server-0eq9.onrender.com/product')
 }
 export const deleteProcduct=async(id)=>{
    return await axios.delete(`https://product-server-0eq9.onrender.com/product/${id}`)
 }