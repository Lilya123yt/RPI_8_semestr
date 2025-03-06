import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/404/not-found-page';
import { AppRoute } from '../../const';
import offers from '../../mocks/offers';
import { FullOffer, OffersList, FavoriteOffer } from '../../types/offer';

type AppProps = {
  rentalOffersCount: number;
  otherPlaces: number;
  offersList: OffersList[];
  offers: FullOffer[];
};

function App({ rentalOffersCount, otherPlaces, offersList, offers }: AppProps): React.ReactElement {
  const filteredFavorites: FavoriteOffer[] = offers
    .filter((offer) => offer.isFavorite) 
    .map((offer) => ({
      ...offer, 
      previewImage: offer.images.length > 0 ? offer.images[0] : '',
      location: offer.location,
    }));

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} />
      <Route path={AppRoute.Favorites} element={<FavoritesPage offersList={filteredFavorites} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<OfferPage otherPlaces={otherPlaces} offers={offers} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
