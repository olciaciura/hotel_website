import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Information from "./pages/Information";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Okolica from "./pages/Okolica";
import About_me from './pages/About_me';
import Offer from './pages/Offer';
import Cennik from './pages/Cennik';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <ScrollToTop />
        <Routes>  
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="o_mnie" element={<About_me/>} />
            <Route path="oferta" element={<Offer/>} />
            <Route path="cennik" element={<Cennik/>} />
            <Route path="przydatne_informacje" element={<Information/>} />
            <Route path="galeria" element={<Galery />} />
            <Route path="okolica" element={<Okolica/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
