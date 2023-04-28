import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Form from './components/loginSignup/Form';
import Settings from './components/settings/Settings';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Form formType="Login" />} />
            <Route path="/signup" element={<Form formType="Sign Up" />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
  );
}

export default App;
