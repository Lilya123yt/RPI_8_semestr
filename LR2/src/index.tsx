import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.rentOffersCount}
      otherPlaces={Setting.otherPlaces}/>
  </React.StrictMode>
);
