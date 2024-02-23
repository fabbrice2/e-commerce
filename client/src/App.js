import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyPage from './components/BuyPage';
import History from './components/History';
import Journal from './components/Journal';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Achat from './components/Achat';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Row/>} />
          <Route path="buypage" element={<BuyPage/>} />
          <Route path="history" element={<History/>} />
          <Route path="journal" element={<Journal/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="nopage" element={<NoPage/>} />
          <Route path="achat" element={<Achat/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
