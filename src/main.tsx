import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import Navbar from './navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
