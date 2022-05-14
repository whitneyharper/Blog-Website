import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from './Post';

//TEST FOR POST COMPONENT RENDER
test('Login post should be rendered', () => {
    render(
        <Post />
    );
    const post = screen.getByTestId('post');
    expect(post).toBeInTheDocument();
})

//TEST POST TITLE IS RENDER
test('POST TITLE should be rendered', () => {
    render(
        <Post />
    );
    const title = screen.getByText('Blog Title');
    expect(title).toBeInTheDocument();
})

//TEST POST TITLE HAS TEXT Blog Title
test('POST TITLE should have text "Blog Title"', () => {
    render(
        <Post />
    );
    const title = screen.getByText('Blog Title');
    expect(title).toHaveTextContent('Blog Title');
})

//TEST DATE IS RENDER
test('Date should be rendered', () => {
    render(
        <Post />
    );
    const date = screen.getByText('Date');
    expect(date).toBeInTheDocument();
})

//TEST DATE HAS TEXT Blog Title
test('Date should have text "Date', () => {
    render(
        <Post />
    );
    const date = screen.getByText('Date');
    expect(date).toHaveTextContent('Date');
})

//TEST POST ARTICLE IS RENDER
test('POST ARTICLE should be rendered', () => {
    render(
        <Post />
    );
    const article = screen.getByText('Some quick example text to build on the card title and make up the bulk of the card content.');
    expect(article).toBeInTheDocument();
})

//TEST POST ARTICLE HAS TEXT Blog Title
test('POST article should have text "Some quick example text to build on the card title and make up the bulk of the card content."', () => {
    render(
        <Post />
    );
    const article = screen.getByText('Some quick example text to build on the card title and make up the bulk of the card content.');
    expect(article).toHaveTextContent('Some quick example text to build on the card title and make up the bulk of the card content.');
})

//TEST CONTINUE READING LINK SHOULD BE RENDERED"
test('continue reading link should be rendered', () => {
    render(
        <Post />
    );
    const link = screen.getByText(/Continue reading/i);
    expect(link).toBeInTheDocument();
})

//TEST CONTINUE READING LINK HAS TEXT "CONTINUE READING"
test('continue reading link should have text "Continue reading"', () => {
    render(
        <Post />
    );
    const link = screen.getByText(/Continue reading/i);
    expect(link).toHaveTextContent(/Continue reading/i);
})