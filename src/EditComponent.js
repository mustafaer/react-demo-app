import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newSurname = this.getSurname.value;
        const newAge = this.getAge.value;
        const data = {
            newName,
            newSurname,
            newAge
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    }
    render() {
        return (
            <div key={this.props.user.id} className="user">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getName = input}
                           defaultValue={this.props.user.title} placeholder="Enter User Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getSurname = input}
                           defaultValue={this.props.user.title} placeholder="Enter User Surname" /><br /><br />
                    <input required type="number" ref={(input) => this.getAge = input}
                           defaultValue={this.props.user.title} placeholder="Enter User Age" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);