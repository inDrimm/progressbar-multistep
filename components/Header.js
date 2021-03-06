import React from "react";
import { Navbar, Form, NavDropdown, Nav, FormControl, Button } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Progress Bar" id="basic-nav-dropdown" style={{ backgroundColor: "yellow" }}>
              <NavDropdown.Item activeClassName="active" href="/">
                Progress Bar 1
              </NavDropdown.Item>
              <NavDropdown.Item activeClassName="active" href="/home3">
                Progress Bar 2
              </NavDropdown.Item>
              <NavDropdown.Item activeClassName="active" href="/home7">
                Progress Bar 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link activeClassName="active" href="/home2" style={{ backgroundColor: "pink" }}>
              PDF View
            </Nav.Link>
            <NavDropdown title="Validation" id="basic-nav-dropdown" style={{ backgroundColor: "#2dd1d6" }}>
              <NavDropdown.Item activeClassName="active" href="/home4">
                Validation
              </NavDropdown.Item>
              <NavDropdown.Item activeClassName="active" href="/home5">
                Validation 2
              </NavDropdown.Item>
              <NavDropdown.Item activeClassName="active" href="/home6">
                Validation 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
