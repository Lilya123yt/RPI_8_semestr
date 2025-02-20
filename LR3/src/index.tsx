import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { BrowserRouter } from 'react-router-dom'; // Оставляем BrowserRouter здесь

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Оборачиваем в BrowserRouter только здесь */}
      <App
        rentalOffersCount={Setting.rentOffersCount}
        otherPlaces={Setting.otherPlaces}
      />
    </BrowserRouter>
  </React.StrictMode>
);
