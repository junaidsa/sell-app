import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery'); 
        console.log(response); 
        
        setItems(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error); 
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

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

      <div className="jumbotron">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6 sm-6">
              <h1 className='text-white fs-bold header-heading'>Capture <span className='em-text'>Life</span></h1>
              <p className='text-white header-p'>A fun and easy way to capture & Share the moments you live for</p>
              <a href="#"><img src="/src/assets/images/playstore.png" alt="" className='app-btn' /></a>
              <a href="#"><img src="/src/assets/images/appstore.png" alt="" className='app-btn' /></a>
            </div>
            <div className="col-md-6">
              <img src="/src/assets/images/phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="col-md-4">
              <CardGroup className="mt-5">
                <Card>
                  <Card.Img className='img-thumbnail' variant="top" src={item.image} alt={item.title} width={"20px"} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Price: ${item.price}</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          ))
        )}
      </div>
    </div>


      <section id='feature'>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className='pt-5'>Features</h1>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-4 col-md-offset-2">
              <img src="/src/assets/images/camera.png" alt="" className='cam-img' />
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

export default Home;
