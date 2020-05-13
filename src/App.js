import React, { Component } from 'react';
import UserForm from './UserForm';
import AllUsers from './AllUsers';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";


class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="4">
                        <UserForm/>
                    </Col>
                    <Col xs="8">
                        <AllUsers/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default App;