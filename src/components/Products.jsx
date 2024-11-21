import React, { useEffect, useState } from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteProcduct, getProduct } from '../services/allApi';
import { toast } from 'react-toastify';



function Products({response}) {
    const[prodectList,setProductList]=useState([])
    useEffect(()=>{
        getData()
    },[response])
    const getData=async()=>{
        const result=await getProduct()
        console.log(result);
        if(result.status==200){
            setProductList(result.data)
        }
    }
    const delProduct=async(id)=>{
        const result = await deleteProcduct(id)
        console.log(result)
        if(result.status==200){
            getData()
            toast.success("Recipe Removed")
        }
    }
  return (
    <>
   <div className='container'>
        <div className=' p-3 '> 
        {
            prodectList.length > 0 ?
            <div className='row'>
                {
                    prodectList.map(item=>(
    
                     
        <Card style={{ width: '18rem' , backgroundColor:"",color:"black"}} className='m-3'>
          <Card.Img variant="top" height={'220px'} src={item?.imageUrl} />
          <Card.Body>
            <Card.Title>{item?.title}</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
              <span>${item?.rate}</span>
              <span>{item?.description}</span>
            </Card.Text>
            <button className='btn' onClick={()=>{delProduct(item.id)}}>
            <i className="fa-solid fa-trash-can fa-lg" style={{color: "#900404",alignItems:'center'}} />
            </button>
          </Card.Body>
        </Card>
      ))
        }
        </div>
        :
        <h2 className='text-center text-danger'>No Products yet</h2>
    }
        </div>
   </div>
    </>
  )
}

export default Products