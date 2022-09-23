import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './features/Dashboard';
import TrendFollowing from './features/TrendFollowing';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trend-following" element={<TrendFollowing />} />
    </Routes>
  </BrowserRouter>
);

export default App;
