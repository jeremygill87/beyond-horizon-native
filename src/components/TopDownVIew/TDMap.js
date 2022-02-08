import React, { Component } from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';
import Map from '../../images/MapTest.png';

class TDMap extends Component {
    render() {
        return (
            <Container fluid>
                <img src={Map}></img>
            </Container>
        )
    }
}

export default TDMap;