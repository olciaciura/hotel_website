import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Layout from "./pages/Layout";
import Information from "./pages/Information";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Offer from './pages/Offer';
import Cennik from './pages/Cennik';
import { Regulamin } from './pages/Regulamin';
import ScrollToTop from './components/scrollToTop';

function App() {
  
  const [page, setPage] = useState(false);

  return (
    <div className="App">
       <BrowserRouter>
        <ScrollToTop setPage={setPage}/>
        <Routes>  
          <Route path="/" element={<Layout setPage={setPage} page={page}/>}>
            <Route path="" element={<Home />} />
            <Route path="oferta" element={<Offer/>} />
            <Route path="cennik" element={<Cennik/>} />
            <Route path="przydatne_informacje" element={<Information/>} />
            <Route path="regulamin" element={<Regulamin/>} />
            <Route path="galeria" element={<Galery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
