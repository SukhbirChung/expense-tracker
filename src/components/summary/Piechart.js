import React from 'react';
import './Summary.css';

function Piechart() {
    const piechartFiller = {
        background: `conic-gradient(violet 12%, indigo 12% 24%, blue 24% 36%, green 36% 48%, yellow 48% 60%, orange 60% 72%, red 72% 84%, pink 84%)`
    };

    return (
        <div className="Piechart">
            <div className="PiechartFigure" style={piechartFiller}></div>
            <div className="PiechartPercentages">
                <h3>Jan 2023</h3>
                <ul>
                    <li>House (12%)</li>
                    <li>Groceries (12%)</li>
                    <li>Car (12%)</li>
                    <li>Phone & Internet (12%)</li>
                    <li>Clothes (12%)</li>
                    <li>Baby (12%)</li>
                    <li>Entertainment (12%)</li>
                    <li>Miscellaneous (12%)</li>
                </ul>
            </div>            
        </div>
    );
}

export default Piechart;