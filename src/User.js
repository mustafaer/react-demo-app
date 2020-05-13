import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

class User extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <button className="edit"
                                onClick={() => this.props.dispatch({type: 'EDIT_USER', id: this.props.user.id})
                                }
                        >Edit
                        </button>
                        <button className="delete"
                                onClick={() => this.props.dispatch({type: 'DELETE_USER', id: this.props.user.id})}
                        >Delete
                        </button>
                    </Col>
                    <Col>
                        <h2 className="user_name">{this.props.user.name}</h2>
                    </Col>
                    <Col>
                        <p className="user_surname">{this.props.user.surname}</p>
                    </Col>
                    <Col>
                        <p className="user_age">{this.props.user.age}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect()(User);