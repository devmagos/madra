import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default class Login extends Component {
  render() {
    return (
<div className="App-header">
      <Form>
          <Form.Group as={Row} controlId="validationCustomUsername">
            <Col sm={12}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                required
                block
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="validationCustom05">
            <Col sm={12}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="inputGroupPrepend"><i className="fa fa-lock fa-0.02x"></i></InputGroup.Text>
              </InputGroup.Prepend>
            <Form.Control type="password" placeholder="Password" required block/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
            </InputGroup>
            </Col>
          </Form.Group>

        <Button type="submit" variant="success" mt="2" block>Login</Button>
        <h6>
          <a href="/Registration">Sign Up  </a>

          Or go to   
          <a href="/Contact"> Contacts</a>
        </h6>
      </Form>
  </div>
    )
  }
}

