import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from './pages/NoPage';
import DetailPage from './pages/DetailPage';
import ProductsList from './pages/ProductsList';
import {Sepetim} from './pages/Sepetim';
import { useActions } from "./hooks"

import './App.css';
import CategoryPage from './pages/CategoryPage';
import Footer from './component/footer/Footer';

function App() {
    const { getCartCount, toogleCart } = useActions();
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
                            <Link className='nav-link' to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sepetim" className='nav-link' onClick={toogleCart}>Sepetim {`(${getCartCount()})`}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <Routes>
        <Route index element={<ProductsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:category/:categoryItem" element={<DetailPage />} />
        <Route path='product/:categoryName' element={<CategoryPage />} />
        <Route path='/sepetim' element={<Sepetim />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      
    </BrowserRouter>

  );
}

export default App;
