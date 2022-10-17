import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home, Details, Quiz} from './pages';

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/details/:videoSlug"} element={<Details/>}/>
                  <Route path={"/quiz/:videoSlug"} element={<Quiz/>}/>
              </Routes>
          </BrowserRouter>
  );
}

export default App;
