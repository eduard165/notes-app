import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = ({ user, onLogout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Note Eduardo App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <>
              <Navbar.Text className="me-2">
                Signed in as: <strong>{user.username}</strong>
              </Navbar.Text>
              <Button variant="outline-primary" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Navbar.Text>Not signed in</Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;