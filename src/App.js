import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyPage from './components/BuyPage';
import History from './components/History';
import Journal from './components/Journal';
import Contact from './components/Contact';

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Row/>} />
          <Route path="buypage" element={<BuyPage/>} />
          <Route path="history" element={<History/>} />
          <Route path="journal" element={<Journal/>} />
          <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
