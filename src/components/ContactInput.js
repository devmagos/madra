import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default class ContactInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editedItem} = this.props;
        return (
            <div className="App-header">
                <Form onSubmit={handleSubmit}>
                  <h3>Contact Input</h3>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomName">
            <Form.Label>Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Add A Name"
                required
                value={item}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please add a name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Add An Email"
                required
                value={item}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please add an email..
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Add A Phone Number"
                required
                value={item}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please add a phone number.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className={editedItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>{editedItem ? "Edit Item" : "Add Contact"}</Button>
      </Form>
            </div>
        )
    }
}
