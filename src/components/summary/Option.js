import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <option value={this.props.year}>{ this.props.year }</option>
        );
    }
}

export default Option;