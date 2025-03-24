import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { OffersListData } from './mocks/offers-list';
import offers from './mocks/offers';
import { store } from './store';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App
          rentalOffersCount={Setting.rentOffersCount}
          otherPlaces={Setting.otherPlaces}
          offersList={OffersListData}
          offers={offers}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
