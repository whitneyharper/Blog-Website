import React from "react";
import PostList from '../Components/PostList';
import User from "../Components/User";
import { Container, Row } from "react-bootstrap";

function ProfilePage() {
    return(
        <Container className="mt-5">
            <Row>
                <User />
            </Row>
            <Row className="mt-5">
                <PostList />
            </Row>
        </Container>
    )
}

export default ProfilePage;