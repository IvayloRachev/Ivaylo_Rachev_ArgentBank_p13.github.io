import Home from './pages/Home';
import Error from './pages/Error';
import Footer from './components/Footer';
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
