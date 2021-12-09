import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar.jsx';
import Dashboard from './components/layout/Dashboard';
import BgImage from './backgroundimage.jpg'

function App() {
  return (
    <div className="App" style={{background: `url(${BgImage})`}} >
      <NavBar />
      <div className='container'>
      <Dashboard />
      </div>
    </div>

  );
}

export default App;
