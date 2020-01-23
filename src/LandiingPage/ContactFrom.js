import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';

class ContactFrom extends Component {
  render() {
    return (
        <div className="contact-from">
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="NAME" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="PHONE" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="EMAIL" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control placeholder="MESSAGE" as="textarea" rows="4" />
                </Form.Group>
                <Button className="Send-btn" variant="primary" type="submit">
                    Send Now
                </Button>
            </Form>
        </div>
    );
  }
}  
export default ContactFrom;