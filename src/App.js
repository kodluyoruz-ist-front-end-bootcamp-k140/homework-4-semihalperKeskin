import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from "../src/Pages/HomePages"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import './App.css';
import NoPage from './Pages/NoPage';

function App() {
  return (
    
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="container collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='nav-link' to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/About" >About</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <Routes>
          {/* <Route path='/' element={<Layout />}/> */}
            <Route index element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

const Layout = () => {
  return (
    <h1>agnjfdnbjfdnbjdffbnjfdjnbdf</h1>
  )
}

export default App;
