import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { login } from '../services/AuthService';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = login(username, password); // Llama al servicio de autenticación
      onLogin(user);
    } catch (err) {
      setError(err.message); // Muestra el mensaje de error si la autenticación falla
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
