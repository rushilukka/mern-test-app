import logo from './logo.svg';
import './App.css';
import Login from'./loginpg';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>  
     <Container >
    <Row className="my-5 ">
      
    <Login/>
      </Row>
    </Container>
    </>
  );
}

export default App;
