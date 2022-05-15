import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import SignUp from "../Components/SignUpForm";

function CreateAccount() {
    return(
        <Container className='mt-5'>
            <Row className="mb-2 mx-auto">
                <Col xs={12} className="mb-3">
                    <h1 className='text-start fw-bold'>Create and Account</h1>
                </Col>
                <Col xs={12}>
                    <p className='text-start'>Registering is easy, just fill in the required fields below and we'll get a new account set up in no time!</p>
                </Col>
            </Row>
            <Row>
                <SignUp />
            </Row>
        </Container>
    )
}

export default CreateAccount;