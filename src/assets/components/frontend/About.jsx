import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const [aboutUs, setAboutUs] = useState('');
const [loading, setLoading] = useState(true);




function About() {
  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/auth/RESOURCE'); // Replace with your actual API endpoint
        setAboutUs(response.data.aboutContent); // Assuming the API response contains 'aboutContent'
        setLoading(false);
      } catch (error) {
        console.error('Error fetching About Us content:', error);
        setLoading(false);
      }
    };

    fetchAboutUs();
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
          <Nav.Link as={Link} to="/Contact">Contact US</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id='title-bar'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='p-2'>About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {loading ? (
              <p>Loading About Us content...</p>
            ) : (
              <p>{aboutUs}</p> // Dynamically rendered About Us content
            )}
            </div>

          </div>
        </div>
      </section>







      <section id="footer" className='bg-dark text-white about-footer'>
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

export default About