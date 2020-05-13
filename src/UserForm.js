import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const surname = this.getSurname.value;
        const age = this.getAge.value;
        const data = {
            id: new Date(),
            name,
            surname,
            age,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_USER',
            data
        })
        this.getName.value = '';
        this.getSurname.value = '';
        this.getAge.value = '';
    }
    render() {
        return (
            <div className="user-container">
                <h1 className="user_heading">Create User</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getName = input}
                           placeholder="Enter User Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getSurname = input}
                           placeholder="Enter User Surname" /><br /><br />
                    <input required type="number" ref={(input) => this.getAge = input}
                           placeholder="Enter User Age" /><br /><br />
                    <button>User</button>
                </form>
            </div>
        );
    }
}
export default connect()(UserForm);