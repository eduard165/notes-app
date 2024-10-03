import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../componentes/Login';
import Header from '../componentes/Header';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Login onLogin={onLogin} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;