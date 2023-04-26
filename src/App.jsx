import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Agent from "./pages/Agent";
import Login from "./pages/Login";
import Statistic from "./pages/Statistic";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="agent" element={<Agent />} />
            <Route path="statistic" element={<Statistic />} />
            <Route path="tickets" element={<Tickets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
