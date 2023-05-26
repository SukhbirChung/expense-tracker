import React from 'react';
import Piechart from './Piechart';
import SummaryByYear from './SummaryByYear';
import './Summary.css';

function Summary() {
    return (
        <div className="Summary">
            <Piechart />
            <SummaryByYear />
        </div>
    );
}

export default Summary;