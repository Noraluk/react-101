import React, { PureComponent } from 'react';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import { AiFillAliwangwang } from 'react-icons/ai';

import './header.css';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="md" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="header">
                <Navbar.Brand href="/">
                  <AiFillAliwangwang style={{ width: '30px', height: '30px', color: 'grey' }} />
                </Navbar.Brand>
                <Nav.Link href="/">Tour</Nav.Link>
                <Nav.Link href="/">Product</Nav.Link>
                <Nav.Link href="/">Features</Nav.Link>
                <Nav.Link href="/">Enterprise</Nav.Link>
                <Nav.Link href="/">Support</Nav.Link>
                <Nav.Link href="/">Pricing</Nav.Link>
                <Nav.Link href="/">Cart</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
