import react, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <div className="Topbar">
                <Link className="TopbarLink" to="/login">Login</Link>
                <Link to="/settings">
                    <img src={process.env.PUBLIC_URL + '/settings.svg'} alt="Settings" />
                </Link>
            </div>
        );
    }
}

export default Topbar;