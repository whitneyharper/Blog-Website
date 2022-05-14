import React from "react";
import {Form, Container, Row, Col, Button} from 'react-bootstrap';


function LoginForm() {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Welcome</h1>
                </Col>
            </Row>
            <Form data-testid="login-form" className="my-5">
                <Form.Group as={Row} className="mb-2 justify-content-center" controlId="formHorizontalEmail">                    
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Enter your email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2 mt-4 justify-content-center" controlId="formHorizontalPassword">                    
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
            <Row>
                <Col className="d-grid col-10 mx-auto my-">
                    <Button size="lg" type="submit" className="rounded-pill" data-testid="login-button">
                    Sign in
                    </Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <p className="mt-2 text-muted">Don't have an account?</p>  
                    <Button variant="link" className="mb-5 text-decoration-none">Sign up</Button>                  
                </Col>               
            </Row>
        </Container>
    )
}

export default LoginForm;