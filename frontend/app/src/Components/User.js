import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function User() {
    return (
        <Container className='mb-5' data-testid="user">
            <Row >
                <Col>
                    <img src="user.png" alt="user pic" width={300} className="rounded-circle img-thumbnail"/>
                </Col>
                <Col>
                    <h3 className='text-center'>User Name</h3>
                    <h3 className='text-center'>Blog</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default User;