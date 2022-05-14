import React from 'react';
import {Card} from 'react-bootstrap';

function Post() {
    return(
        <Card style={{width: "18rem"}} data-testid="post" className="mx-auto">
            <Card.Body className='text-start'>
                <Card.Title>Blog Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card content.
                </Card.Text>
                <Card.Link href="#">Continue reading</Card.Link>                
            </Card.Body>
        </Card>
    )
}

export default Post;