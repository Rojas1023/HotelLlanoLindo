import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import About from './pages/about';
import RoomsPage from './pages/Rack/RoomsPage'; // Asegúrate de que el path sea correcto

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rack/RoomsPage" element={<RoomsPage />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;