import React, { useState } from 'react'
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { CreateProductAsync } from '../../Service/Action/ProductAction';
import "./AddProduct.css"

function AddProduct({ handleClick }) {
    const [product, setProduct] = useState({
        Name: "",
        price: "",
        stock: ""
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...product, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(CreateProductAsync(product))
        handleClick();
        setProduct({
            Name: "",
            price: "",
            stock: ""
        })
    }
    return (
        <>
            <div className='form-wrapper d-flex justify-content-center align-items-center ' style={{ margin: "70px" }}>
                <Container className='wrapper'>
                    <Card className='p-4 border-dark text-white bg-primary d-flex justify-content-center align-items-center' >
                        <Row className='align-item-center row grid-divider'>
                            <Col className='d-flex col-6'>
                                <div className='d-flex align-items-center'>
                                    <img className="mx-3" style={{ maxHeight: "450px", width: "470px", borderRadius: "5px" }} src='img/productimg.jpg' alt='' />
                                </div>
                            </Col>
                            <Col className="d-flex col-6">
                                <Form onSubmit={(e) => { handleSubmit(e) }} style={{ width: "470px" }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="title" name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" placeholder="product price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="text" placeholder="product stock" name='stock' value={product.stock} onChange={(e) => { handleChange(e) }} />
                                    </Form.Group>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div >
        </>
    )
}

export default AddProduct