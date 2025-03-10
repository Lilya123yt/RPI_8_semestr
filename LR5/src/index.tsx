import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { BrowserRouter } from 'react-router-dom';
import offers from './mocks/offers';
import { OffersListData } from './mocks/offers-list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        rentalOffersCount={Setting.rentOffersCount}
        otherPlaces={Setting.otherPlaces}
        offersList={ OffersListData }
        offers = {offers}
      />
    </BrowserRouter>
  </React.StrictMode>
);
