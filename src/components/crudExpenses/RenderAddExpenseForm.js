import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddExpense.css';

function RenderAddExpenseForm(props) {
    const categoryInputRef = useRef();
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const SubmitHandler = (evt) => {
        evt.preventDefault();

        const category = categoryInputRef.current.value;
        const title = titleInputRef.current.value;
        const amount = Number(amountInputRef.current.value);
        const date = dateInputRef.current.value + "T00:00:00";

        props.sendExpense({ id: uuidv4(), category, title, amount, date });
    }

    const cancelForm = () => {
        props.sendExpense('cancel');
    }

    return (
        <form className="AddExpense-Form" onSubmit={ SubmitHandler}>
            <div className="InputWrapper">
                <label className="AddExpense-Form-Label" htmlFor="category">Category</label>
                <select defaultValue="Miscellaneous" ref={categoryInputRef }>
                    <option value="House">House</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Car">Car</option>
                    <option value="Phone">Phone & Internet</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Baby">Baby</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>
            <div className="InputWrapper">
                <label className="AddExpense-Form-Label" htmlFor="title">Title</label>
                <input className="AddExpense-Form-Input" type="text" id="title" required ref={titleInputRef }/>
            </div>
            <div className="InputWrapper">
                <label className="AddExpense-Form-Label" htmlFor="amount">Amount</label>
                <input className="AddExpense-Form-Input" type="number" min="0.01" step="0.01" id="amount" required ref={amountInputRef}/>
            </div>
            <div className="InputWrapper">
                <label className="AddExpense-Form-Label" htmlFor="date">Date</label>
                <input className="AddExpense-Form-Input" type="date" min="2023-01-01" max="2030-12-31" id="date" required ref={dateInputRef }/>
            </div>
            <button type="submit" className="AddExpense-Button">Add Expense</button>
            <div className="Cancel">
                <button onClick={cancelForm }>X</button>
            </div>
        </form>
    );
}

export default RenderAddExpenseForm;