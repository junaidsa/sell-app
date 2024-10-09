import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"

import InputGroup from 'react-bootstrap/InputGroup';


function Contact() {
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
          <Nav.Link as={Link} to="/Contact">Contact US</Nav.Link>

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
           


    <Form>
      
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      

      
        <Form.Label className='fw-bold mt-2'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      
        
        <p className='fw-bold mt-2'>Write Text</p>
        <Form.Control as="textarea" aria-label="With textarea" />
      
        
      
      <Button variant="primary" type="submit" className='mt-3 p-3'>
        Submit
      </Button>
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
  )
}

export default Contact