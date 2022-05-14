import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './Post';

function PostList() {
    return(
        <Container>
            <Row className='mx-auto'>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                    <Post />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                    <Post />
                </Col>
                <Col  xs={12}  sm={12} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                    <Post />
                </Col>
                <Col  xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className="mb-3">
                    <Post />
                </Col>
            </Row>            
        </Container>
    )
}

export default PostList;