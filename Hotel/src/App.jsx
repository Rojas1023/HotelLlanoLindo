import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import About from './pages/about';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;