/* eslint-disable react/require-render-return */
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'



export default class Registration extends Component {
  
  render(){
  
    const {item, handleChange, handleSubmit}  = this.props;

        return (
              
  <div className="App-header">
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="9" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            autoFocus
            autoComplete
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark" 
            value={item} 
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required            
            autoComplete
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            value={item} 
            onChange={handleChange}
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              autoComplete
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              value={item} 
              onChange={handleChange}
          
            />
            <Form.Control.Feedback type="invalid">
              Please fill in your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="9" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="City"
          autoComplete 
          required 
          value={item} 
          onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="State"           
          autoComplete
          required 
          value={item} 
          onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Zip"
          autoComplete 
          required 
          value={item} 
          onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          value={item} 
          onChange={handleChange}
          
        />
      </Form.Group>
      <Button type="submit" as={Col} md="9">Register</Button>
      <h6><a href="/Login">Login</a></h6>
    </Form>

</div>
        )
    }
     
}