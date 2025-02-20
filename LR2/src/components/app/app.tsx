import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/404/not-found-page';

type AppProps = {
    rentalOffersCount: number;
    otherPlaces: number;
}

function App({ rentalOffersCount, otherPlaces }: AppProps): React.ReactElement {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage rentalOffersCount={rentalOffersCount} />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/offer" element={<OfferPage otherPlaces={otherPlaces} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
