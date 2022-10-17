import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home,Details} from './pages';

function App() {
  return (
      <React.StrictMode>
          <BrowserRouter>
              <Routes>
                <Route path={"/"} element={<Home/>}/>
                  <Route path={"/details/:movieID"} element={<Details/>}/>
              </Routes>
          </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
