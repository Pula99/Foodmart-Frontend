import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Product.js'; 

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/item/:id" element={<Product />} />
        </Routes>
      </Router>
  );
}

export default App;
