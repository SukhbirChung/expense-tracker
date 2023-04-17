import React, { Component } from 'react';
import './Homepage.css';
import MainHeading from './components/MainHeading';
import Expenses from './components/expenses/Expenses';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <MainHeading />
                <Expenses />
            </div>
        );
    }
}

export default Homepage;