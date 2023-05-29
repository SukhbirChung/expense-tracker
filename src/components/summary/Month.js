import React from 'react';
import './Month.css';

function Month(props) {
    let totalExpense = (props.totalExpense / 5000) * 100;
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
            <div className='Month-Bar' onClick={props.onCurrentMonthChange.bind(this, props.month)}>
                <div className="Month-Bar-Filled" style={myStyles}></div>
            </div>
            <div className="Month-Name">{props.month}</div>
        </div>
    );  
}

export default Month;