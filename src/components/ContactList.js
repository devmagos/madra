import React, { Component } from 'react'
import ContactItem from './ContactItem'
import Button from 'react-bootstrap/Button'

export default class ContactList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <div className="App-header">
            <h3>Contact List</h3>
                <ul>
{
    items.map(item => {

        return <ContactItem 
        key={item.id} 
        title={item.title}
        handleDelete={() => handleDelete(item.id)}
        handleEdit={() => handleEdit(item.id)}
        ></ContactItem>
    })
}

                    <Button type="submit" variant="danger" size="lg" onClick={clearList} block>Clear Contacts</Button>   
                </ul>
            </div>
        )
    }
}
