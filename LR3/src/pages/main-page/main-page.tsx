import React from "react";
import CitiesCard from "../../components/cities-card/cities-card"; 
import { Logo } from "../../components/logo/logo";

type MainPageProps = {
    rentalOffersCount: number;
}

function MainPage({rentalOffersCount} : MainPageProps): React.ReactElement {
  const offers = [
    { title: "Beautiful & luxurious apartment at great location", price: 120, type: "Apartment", premium: true, rating: 80, image: "img/apartment-01.jpg" },
    { title: "Wood and stone place", price: 80, type: "Private room", premium: false, rating: 80, image: "img/room.jpg" },
    { title: "Canal View Prinsengracht", price: 132, type: "Apartment", premium: false, rating: 80, image: "img/apartment-02.jpg" },
    { title: "Nice, cozy, warm big bed apartment", price: 180, type: "Apartment", premium: true, rating: 100, image: "img/apartment-03.jpg" },
  ];

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"].map((city, index) => (
                <li className="locations__item" key={index}>
                  <a
                    className={`locations__item-link tabs__item ${city === "Amsterdam" ? "tabs__item--active" : ""}`}
                    href="#"
                  >
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {["Popular", "Price: low to high", "Price: high to low", "Top rated first"].map((option, index) => (
                    <li
                      className={`places__option ${index === 0 ? "places__option--active" : ""}`}
                      tabIndex={0}
                      key={index}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map(({ title, price, type, premium, rating, image }, index) => (
                  <CitiesCard
                    key={index}
                    title={title}
                    price={price}
                    type={type}
                    premium={premium}
                    rating={rating}
                    image={image}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
