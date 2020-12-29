import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Back from '../components/Back'

export default class EditUser extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Back/>
                <h1>Edit User</h1>
                </Container>
            </div>
        )
    }
}
