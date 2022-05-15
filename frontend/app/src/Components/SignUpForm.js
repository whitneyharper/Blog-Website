import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").matches(/^[ a-zA-Z]+$/g, "First Name is letters only"),    
    lastName: yup.string().required("Last Name is required").matches(/^[ a-zA-Z]+$/g, "Last Name is letters only"),
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),

})

function SignUp() {
    return(
        <Formik
            initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    password: "",
                    image: "",
                    aboutMe: ""
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    alert("Form is validated and in this block api call should be made..");
                    }
                }
        >
             {
                 ({
                    handleSubmit,
                    handleChange,            
                    values,                
                    errors, 
                }) => (
                    <Container className='mt-5' data-testid="sign-form">                        
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3 mx-auto">
                                <Form.Group as={Col} controlId="formGridEmail" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className= 'redAsterisks fw-bold'>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="firstName"
                                        placeholder="Enter First Name" 
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}                                    
                                    />
                                    <Form.Control.Feedback  type="invalid">{errors.firstName}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className= 'redAsterisks fw-bold'>Last Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback  type="invalid">{errors.lastName}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 mx-auto">
                                <Form.Group as={Col} controlId="formGridEmail" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className= 'redAsterisks fw-bold'>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="username"
                                        placeholder="Enter Username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback  type="invalid">{errors.username}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className= 'redAsterisks fw-bold'>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                        />
                                    <Form.Control.Feedback  type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 mx-auto">
                                <Form.Group as={Col} controlId="formGridEmail" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className= 'redAsterisks fw-bold'>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                        placeholder="Enter Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}   
                                        />
                                    <Form.Control.Feedback  type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" className='text-start mb-3' xs={12} sm={12} md={6}>
                                    <Form.Label className="fw-bold">Image</Form.Label>
                                    <Form.Control 
                                        type="file" 
                                        name="image"
                                        value={values.image}
                                        onChange={handleChange}
                                        />
                                </Form.Group>
                            </Row>
                            <Row className="mx-auto">
                                <Form.Group className="mb-5 text-start" controlId="exampleForm.ControlTextarea1" xs={12} sm={12} md={6}>
                                    <Form.Label className="fw-bold">About Me</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        name="aboutMe"
                                        placeholder="Tell us about yourself!"
                                        value={values.aboutMe}
                                        onChange={handleChange}
                                        rows={3} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" size="lg" data-testid="sign-button">Submit</Button>
                                </Col>                                
                            </Row>
                        </Form>
                    </Container>
                )
            }
        </Formik>
    )
}

export default SignUp;