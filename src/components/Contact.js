import React, { Component } from 'react'
import ContactInput from './ContactInput'
import ContactList from './ContactList'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

export default class Contact extends Component {

              state = {
                items: [],
                id: uuid,
                item: "",
                editedItem: false
              };

            handleChange = e => {
            this.setState({
            item: e.target.value
            });
            };
                
            handleSubmit = e => {
            e.preventDefault();

            const newItem = {
            id:this.state.id,
            title: this.state.item
            }
            
            const updatedItems = [...this.state.items,newItem];

            this.setState = ({
             items: updatedItems,
             item: "",
             id: uuid(),
             editedItem: false
            })
          };

          clearList = () => {
            this.setState({
              items: []
            });
          };
          handleDelete = id => {
            const filteredItems = this.state.items.filter(item => item.id !== id);
            
            this.setState({
              items: filteredItems
            });
          };

          handleEdit = id => {
            const filteredItems = this.state.items.filter(item => item.id !== id);
            
            const selectedItem = this.state.items.find(item => item.id === id)

              console.log(selectedItem);

            this.setState({
              items: filteredItems,
              item: selectedItem.title,
              editedItem: true,
              id: id
            });
          }
    render() {
        return (
            <div className="App-header">
              <h3>Contacts</h3>
              <ContactInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editedItem={this.state.editedItem}
              >
              </ContactInput>              
              <ContactList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              >
              </ContactList>
            </div>
        )
    }
}
