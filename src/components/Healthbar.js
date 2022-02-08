import React, { Component } from 'react';

class HealthBar extends Component {
    state = {
        currentHealth: this.props.currentHealth
    };

    constructor(props) {
        super(props);
    }
}