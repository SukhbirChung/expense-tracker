import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.setMaxExpense = this.setMaxExpense.bind(this);
    }

    state = {
        maxExpense: ''
    }

    setMaxExpense(evt) {
        this.setState({ maxExpense: evt.target.value })
    }

    render() {
        return (
            <div className="Settings">
                <h1>My Settings</h1>
                <div className="MySettings">
                    <form>
                        <label htmlFor="maxExpense">Set Expense Limit</label>
                        <input id="maxExpense" type="number" min="0.01" value={this.state.maxExpense} name={this.state.maxExpense} onChange={this.setMaxExpense} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;