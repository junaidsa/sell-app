import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({ title: '', email: '', description: '' });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://wrkbid.com/portal-new/api/contact/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 422) {
        setErrors(data.errors);
      } else if (response.status === 200) {
        setSuccessMessage(data.message || 'Form submitted successfully');
        setFormData({ title: '', email: '', description: '' });
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='em-text'>MA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id='title-bar'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='p-2'>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit}>
                <Form.Label className='fw-bold mt-2'>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  isInvalid={!!errors.title}
                />
                {errors.title && <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>}

                <Form.Label className='fw-bold'>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}

                <p className='fw-bold mt-2'>Write Text</p>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                {errors.description && <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>}

                <Button variant="primary" type="submit" className='mt-3 p-3'>
                  Submit
                </Button>

                {successMessage && <p className="text-success mt-3">{successMessage}</p>}
                {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
              </Form>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className='bg-dark text-white'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className='d-flex'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className='fw-bold'>Copyright © 2024 All Rights Reserved by M.A</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
