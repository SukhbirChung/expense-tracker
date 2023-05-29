import React, { useState } from 'react';
import { categories } from '../../helpers/initialExpenses';
import Piechart from './Piechart';
import SummaryByYear from './SummaryByYear';
import './Summary.css';

function Summary(props) {
    const [currentMonth, changeCurrentMonth] = useState('Jan');
    const eachCategoryExpenses = [];
    const percentages = [];
    const totalAmounts = [];
    const totalAmountsPercentage = [];

    const getCurrentMonthExpenses = () => {
        return props.expensesList.filter((eachExpense) => {
            return (new Date(eachExpense.date).toLocaleString('en-US', { month: 'short' })) === currentMonth;
        });
    }

    const getPercentages = () => {
        if (getCurrentMonthExpenses().length === 0) {
            for (let i = 0; i < 8; i++) {
                totalAmountsPercentage[i] = 0;
            }
            return totalAmountsPercentage;
        }

        for (let eachCategory of categories) {
            eachCategoryExpenses.push(getCurrentMonthExpenses().filter((eachExpense) => {
                return eachExpense.category === eachCategory;
            }))
        }

        for (let eachCategoryExpense of eachCategoryExpenses) {
            percentages.push(eachCategoryExpense.map((eachExpense) => {
                return eachExpense.amount;
            }))
        }

        for (let percentage of percentages) {
            let totalAmount = 0;
            for (let p of percentage) {
                totalAmount = totalAmount + p;
            }
            totalAmounts.push(totalAmount);
        }

        let totalMonthExpense = 0;
        for (let amount of totalAmounts) {
            totalMonthExpense = totalMonthExpense + amount;
        }
        totalMonthExpense = totalMonthExpense;
        
        for (let i = 0; i < 8; i++) {
            totalAmountsPercentage[i] = ((totalAmounts[i] / totalMonthExpense) * 100).toFixed(0);
        }

        return totalAmountsPercentage;
    }    

    getPercentages();

    const currentMonthChangeHanlder = (month) => {
        changeCurrentMonth(month);
    }

    return (
        <div className="Summary">
            <Piechart currentYear={props.currentYear} currentMonth={currentMonth} totalAmountsPercentage={totalAmountsPercentage} />
            <SummaryByYear currentYear={props.currentYear} onCurrentYearChange={props.onCurrentYearChange} onCurrentMonthChange={currentMonthChangeHanlder} totalExpenses={props.expensesList} />
        </div>
    );
}

export default Summary;