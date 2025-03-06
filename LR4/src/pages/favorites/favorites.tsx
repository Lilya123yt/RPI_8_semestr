import React from "react";
import { FavoriteCardList } from "../../components/favorite-card-list/favorite-card-list";
import { Logo } from "../../components/logo/logo";
import { FavoriteOffer } from "../../types/offer";

type FavoritesPageProps = {
  offersList: FavoriteOffer[];
};

function FavoritesPage({ offersList }: FavoritesPageProps): React.ReactElement {
  const favoritesByCity = offersList.reduce<Record<string, FavoriteOffer[]>>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
  
    acc[offer.city.name].push({
      id: offer.id,
      title: offer.title,
      price: offer.price,
      type: offer.type,
      rating: offer.rating,
      previewImage: offer.previewImage,
      isPremium: offer.isPremium,
      city: offer.city,
      location: offer.location,
      isFavorite: offer.isFavorite,
    });
  
    return acc;
  }, {});  

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">{offersList.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offersList.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listings</h1>
              <ul className="favorites__list">
                {Object.entries(favoritesByCity).map(([city, offers]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <FavoriteCardList offersList={offers} />
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <p className="favorites__status">Nothing yet saved.</p>
            </section>
          )}
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
