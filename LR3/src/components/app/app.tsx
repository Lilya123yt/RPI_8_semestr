import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Убираем BrowserRouter
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/404/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
    rentalOffersCount: number;
    otherPlaces: number;
}

function App({ rentalOffersCount, otherPlaces }: AppProps): React.ReactElement {
    return (
        <Routes>
            <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />} />
            <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage /></PrivateRoute>} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Offer} element={<OfferPage otherPlaces={otherPlaces} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
