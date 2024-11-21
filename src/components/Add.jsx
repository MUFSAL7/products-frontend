import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addProduct } from '../services/allApi';
addProduct




function Add({ res }) {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({
        title: "", description: "", rate: "", imageUrl: ""
    })
    const handleAdd = async () => {
        console.log(product);
        const { title, description, rate, imageUrl } = product
        if (!title || !description || !rate || !imageUrl) {
            //alert("enter valid input")
            toast.warning("enter valid input!")
        }
        else {
            const result = await addProduct(product)
            console.log(result)
            if (result.status == 201) {
                toast.success("product Added")
                handleClose()
                setProduct({
                    title: "", description: "", rate: "", imageUrl: ""
                })
                res(result)
            }
            else {
                toast.error("Adding Failed")
            }
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container border border-1 row'>
                <div className=' col-lg-10 p-5'>
                    <button className='btn btn-dark' onClick={handleShow}> Add products</button>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" placeholder='product Name' onChange={(e) => { setProduct({ ...product, title: e.target.value }) }} className='form-control mb-3' />
                        <input type="text" placeholder='Description' onChange={(e) => { setProduct({ ...product, description: e.target.value }) }} className='form-control mb-3' />
                        <input type="number" placeholder='price' onChange={(e) => { setProduct({ ...product, rate: e.target.value }) }} className='form-control mb-3' />
                        <input type="text" placeholder=' Image URL' onChange={(e) => { setProduct({ ...product, imageUrl: e.target.value }) }} className='form-control mb-3' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd} >Add</Button>
                </Modal.Footer>
            </Modal>

           

        </>
    )
}

export default Add