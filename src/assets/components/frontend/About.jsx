import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"



function About() {
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, inventore! Itaque ea vitae culpa possimus. Atque mollitia dolore consectetur delectus eligendi doloremque aperiam optio, aliquid beatae aliquam necessitatibus odit. Esse, voluptatibus. Commodi quidem aspernatur exercitationem? Excepturi voluptate perferendis, corrupti unde velit quos culpa sed fuga exercitationem eaque vel, molestias qui doloribus ea vero autem delectus eos suscipit quisquam? Eveniet, assumenda laudantium facere nemo, repudiandae dignissimos id minus impedit nostrum magnam eius, vero nisi possimus quos iste? Odit incidunt, fugiat ab, quas saepe libero ipsam aliquid quaerat optio aliquam at adipisci vel. Dolores dolore sunt provident sit vel labore ea saepe, ipsa commodi, corporis maxime tempora nemo. Harum eius error modi labore quas. Dignissimos totam voluptas vel accusamus optio impedit nisi aliquid illum, tempore quod, sed officiis commodi. Quos minima, consectetur repudiandae eum facilis excepturi commodi saepe non? Maxime, magni beatae. Quaerat blanditiis deleniti qui dicta animi iusto eos ipsam, facilis alias voluptatem magni explicabo corrupti natus error, quam ab nesciunt sunt architecto! Aspernatur libero, a, repellendus consequatur laborum molestias quibusdam quo, laboriosam ex voluptas odit? Quam itaque libero non aut voluptate voluptatum a maiores iste quasi doloribus, quisquam rerum atque repudiandae, optio accusamus. Esse reiciendis dolor earum repudiandae aut vero eligendi veritatis non distinctio voluptas quia molestiae omnis totam facilis minus, illum, possimus rerum at, aliquam error natus itaque. Minima sequi quaerat perspiciatis voluptas sunt delectus repellendus eveniet soluta ratione consequuntur aliquam dolor culpa ipsa harum mollitia expedita pariatur maiores possimus praesentium enim voluptates est dolore, eius inventore. Numquam ad voluptatem enim eaque accusantium nam nisi aliquam porro doloremque assumenda minima, illum dicta explicabo dolore debitis consequuntur autem quis itaque eligendi excepturi possimus a dolorum. Suscipit eum est sit unde esse sed adipisci a vero, pariatur perferendis fugiat consequuntur quia necessitatibus saepe quas, cupiditate repellat qui repudiandae libero molestias tempora?</p>
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