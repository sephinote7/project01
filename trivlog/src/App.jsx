import React from 'react';
import HeaderComp from './components/common/HeaderComp';
import FooterComp from './components/common/FooterComp';
import VisualComp from './pages/home/VisualComp';
import HotViewComp from './pages/home/HotViewComp';
import RecentViewComp from './pages/home/RecentViewComp';

function App() {
  return (
    <div>
      <HeaderComp />
      <VisualComp />
      <HotViewComp />
      <RecentViewComp />
      <FooterComp />
    </div>
  );
}

export default App;
