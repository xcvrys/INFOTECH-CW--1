import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home, Details, Quizz } from './pages';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/details/:movieID"} element={<Details />} />
          <Route path={"/quizz/"} element={<Quizz />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
