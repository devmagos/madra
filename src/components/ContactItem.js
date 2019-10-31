import React, { Component } from 'react'

export default class ContactItem extends Component {
    render() {
        const {title,handleDelete,handleEdit} = this.props
        return (
            <div className="App-header">
                <h3>Contact Item</h3>
                <li className="list-group-item d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="EditDelete-icons">
                        <span className="mx-2 text-success">
                            <i className="fas fa-pen" title="Edit Contact" onClick={handleEdit}/>
                        </span>
                        <span className="mx-2 text-danger">
                            <i className="fas fa-trash" title="Delete Contact" onClick={handleDelete}/>
                        </span>
                    </div>
                    <h6>{title}</h6>
                    <div className="EditDelete-icons">
                        <span className="mx-2 text-success">
                            <i className="fas fa-pen" title="Edit Contact" onClick={handleEdit}/>
                        </span>
                        <span className="mx-2 text-danger">
                            <i className="fas fa-trash" title="Delete Contact" onClick={handleDelete}/>
                        </span>
                    </div>
                    <h6>{title}</h6>
                    <div className="EditDelete-icons">
                        <span className="mx-2 text-success">
                            <i className="fas fa-pen" title="Edit Contact" onClick={handleEdit}/>
                        </span>
                        <span className="mx-2 text-danger">
                            <i className="fas fa-trash" title="Delete Contact" onClick={handleDelete}/>
                        </span>
                    </div>
                </li>
            </div>
        )
    }
}
