import React, { Component } from 'react';
import './Month.css';

class Month extends Component {
    render() {
        let totalExpense = (this.props.totalExpense / 1000) * 100;
        let backgroundColor;
        if (totalExpense > 100) {
            totalExpense = 100;
        }
        if (totalExpense <= 50) {
            backgroundColor = 'green';
        }
        else if (totalExpense > 50 && totalExpense <= 75) {
            backgroundColor = 'orange';
        }
        else {
            backgroundColor = 'red';
        }
        const myStyles = {
            height: totalExpense + "%",
            backgroundColor: backgroundColor,
            borderTopLeftRadius: totalExpense > 97 ? '0.5rem' : '',
            borderTopRightRadius: totalExpense > 97 ? '0.5rem' : ''
        }

        return (
            <div className="Month">
                <div className="Month-Bar">
                    <div className="Month-Bar-Filled" style={myStyles}></div>
                </div>
                <div className="Month-Name">{this.props.month}</div>
            </div>
        );
    }
}

export default Month;