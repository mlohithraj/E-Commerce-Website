import React, { useRef } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './styles.css';

const Contact = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const contactUsPage = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    props.onAddContact(contactUsPage)
  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <Row md="1">
        <Form.Group as={Col} md="4">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Name" ref={nameRef} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email ID</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Username"
              required
              ref={emailRef}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Email Id
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Phone No"
            ref={phoneRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="submit   ">
        Submit form
      </Button>
    </Form>
  );
};

export default Contact;
