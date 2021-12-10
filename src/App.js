import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar.jsx';
import Dashboard from './components/layout/Dashboard';
import BgImage from './backgroundimage.jpg'



function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${BgImage})`}} >
      <NavBar />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
