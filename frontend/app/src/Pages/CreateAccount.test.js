import React from "react";
import { render, screen } from "@testing-library/react";
import CreateAccount from "./CreateAccount";

//test to see if page has a heading
test('heading is in the document', () =>{
    render(<CreateAccount />);
    const heading = screen.getByText('Create and Account');
    expect(heading).toBeInTheDocument();
})

//test to see if heading has text Create and Account
test('should have heading text Create and Account', () => {
    render(<CreateAccount />);
    const labelText = screen.getByText('Create and Account');
    expect(labelText).toHaveTextContent('Create and Account');
})
//test to see if page has a paragraph
test('paragraph is in the document', () =>{
    render(<CreateAccount />);
    const paragraph = screen.getByText("Registering is easy, just fill in the required fields below and we'll get a new account set up in no time!");
    expect(paragraph).toBeInTheDocument();
})

//test to see if paragraph has text 
test("should have text Registering is easy, just fill in the required fields below and we'll get a new account set up in no time!", () => {
    render(<CreateAccount />);
    const labelText = screen.getByText("Registering is easy, just fill in the required fields below and we'll get a new account set up in no time!");
    expect(labelText).toHaveTextContent("Registering is easy, just fill in the required fields below and we'll get a new account set up in no time!");
})