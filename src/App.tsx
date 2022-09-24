import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideMenu from './components/SideMenu';
import Dashboard from './features/Dashboard';
import TrendFollowing from './features/TrendFollowing';

const App = () => (
  <BrowserRouter>
    <SideMenu>
      <SideMenu.Item icon="home" to="/" />
      <SideMenu.Item icon="chart" to="/trend-following" />
    </SideMenu>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trend-following" element={<TrendFollowing />} />
    </Routes>
  </BrowserRouter>
);

export default App;
