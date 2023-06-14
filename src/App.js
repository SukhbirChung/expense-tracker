import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Form from './components/loginSignup/Form';
import UserHomepage from './components/UserHomepage';
import './App.css';

function App() {
    return (
        <Routes>
            {/*<Route path="/UserHomepage" element={<UserHomepage />} />*/}
            {/*<Route path="/" element={<Homepage isFilled/>} />*/}
            <Route path="/" element={<UserHomepage />} />
            <Route path="/login" element={<Form formType="Login" />} />
            <Route path="/signup" element={<Form formType="Sign Up" />} />
        </Routes>
  );
}

export default App;