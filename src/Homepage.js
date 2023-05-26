import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="HomepageMainHeading">My Expense Tracker</h1>
            <h2>Track your monthly expenses</h2>

            <video className="HomepageDemoVideo" src={process.env.PUBLIC_URL + 'assets/demo.mp4'} autoPlay loop></video>

            <Link className="Link HomepageLink" to="/login">Login</Link>
            <Link className="Link HomepageLink" to="/signup">Create new account</Link>
        </div>
    );
}

export default Homepage;