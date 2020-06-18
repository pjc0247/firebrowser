import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import Browser from './browser';

const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Browser />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
