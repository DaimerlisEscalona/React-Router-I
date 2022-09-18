import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contacto.css';

function BasicExample() {
  return (
    <Form className='form-formulario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='form-inp-correo' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" className='form-inp-desc' />
      </Form.Group>
      <Button className='form-boton' variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

export default BasicExample;