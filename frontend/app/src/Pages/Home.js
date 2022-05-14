import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import LoginForm from "../Components/LoginForm";

function Home() {
    return(
        <Container className="my-5 border border-3 border-dark shadow pb-5">            
                <Row>
                    <Col xs={6} className="mt-5">
                        <img src="image-small.jpg" alt="guy looking at sky" className="h-100 w-100 img-fluid border-dark border-3 rounded"/>
                    </Col>
                    <Col xs={6} className="mt-5">                        
                        <LoginForm />                        
                    </Col>
                </Row>        
        </Container>        
    )
}

export default Home;