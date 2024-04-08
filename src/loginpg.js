import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data); // Handle success response
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error); // Handle error
      setLoginError('Invalid username or password');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-header ">Login</div>
            <div className="card-body">
              {isLoggedIn ? (
                <Alert variant="success">Login successful!</Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  {loginError && <Alert variant="danger" className='my-2'>{loginError}</Alert>}
                  <Button variant="primary" type="submit" className='float-end my-2'>
                    Login
                  </Button>
                </Form>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
