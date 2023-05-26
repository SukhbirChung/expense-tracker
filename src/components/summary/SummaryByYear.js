import React from 'react';
import Month from './Month';

function SummaryByYear() {
    const options = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let year = 2023; year <= 2030; year++) {
        options.push(<option key={year} value={year}>{year}</option>);
    }

    return (
        <div className="SummaryByYear">
            <div className="Summary-Filter">
                <label htmlFor="year">Filter by year</label>
                <select id="year" name="year">
                    {options}
                </select>
            </div>
            <div className="Summary-Body">
                {months.map((eachMonth) => {
                    let currentExpensePrice = 500;
                    return <Month key={eachMonth} month={eachMonth} totalExpense={currentExpensePrice}/>
                })}
            </div>
        </div>
    );
}

export default SummaryByYear;