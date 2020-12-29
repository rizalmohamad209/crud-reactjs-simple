import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Back from '../components/Back'
export default class DetailsUser extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Back/>
                <h1>Details User</h1>
                </Container>
            </div>
        )
    }
}
