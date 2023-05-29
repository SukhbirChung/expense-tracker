import React from 'react';
import './Summary.css';

function Piechart(props) {
    const totalAmounts = props.totalAmountsPercentage;

    let piechartFiller, flag = true;
    for (let totalAmount of totalAmounts) {
        if (totalAmount !== 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        piechartFiller = {};
    }
    else {
        piechartFiller = {
            background: `conic-gradient(violet ${totalAmounts[0]}%, 
                                    indigo ${totalAmounts[0]}% ${Number(totalAmounts[0]) + Number(totalAmounts[1])}%,
                                    blue ${Number(totalAmounts[0]) + Number(totalAmounts[1])}% ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2])}%,
                                    green ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2])}% ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3])}%,
                                    yellow ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3])}% ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4])}%,
                                    orange ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4])}% ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4]) + Number(totalAmounts[5])}%,
                                    red ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4]) + Number(totalAmounts[5])}% ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4]) + Number(totalAmounts[5]) + Number(totalAmounts[6])}%,
                                    pink ${Number(totalAmounts[0]) + Number(totalAmounts[1]) + Number(totalAmounts[2]) + Number(totalAmounts[3]) + Number(totalAmounts[4]) + Number(totalAmounts[5]) + Number(totalAmounts[6])}% 100%)`
        };
    }

    return (
        <div className="Piechart">
            <div className="PiechartFigure" style={piechartFiller}></div>
            <div className="PiechartPercentages">
                <h3>{ props.currentMonth} { props.currentYear}</h3>
                <ul>
                    <li>{`House (${totalAmounts[0]}%)`}</li>
                    <li>{`Groceries (${totalAmounts[1]}%)`}</li>
                    <li>{`Car (${totalAmounts[2]}%)`}</li>
                    <li>{`Phone & Internet (${totalAmounts[3]}%)`}</li>
                    <li>{`Clothes (${totalAmounts[4]}%)`}</li>
                    <li>{`Baby (${totalAmounts[5]}%)`}</li>
                    <li>{`Entertainment (${totalAmounts[6]}%)`}</li>
                    <li>{`Miscellaneous (${totalAmounts[7]}%)`}</li>
                </ul>
            </div>            
        </div>
    );
}

export default Piechart;