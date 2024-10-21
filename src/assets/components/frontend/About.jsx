import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts/user/5'); // Replace with actual API
        setPosts(response.data.posts);
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
      {/* Navbar */}
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

      {/* Title Bar */}
      <section id='title-bar'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='p-2'>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section id='about' className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {loading ? (
                <p></p>
              ) : (
                <div>
                  <h2>User Posts</h2>
                  {posts.map((post) => (
                    <div key={post.id} className="mb-4">
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
  );
}

export default About;
