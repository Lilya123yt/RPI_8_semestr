import React, { useState } from "react";
import { AppRoute } from "../../const";
import { useNavigate } from "react-router-dom"; 

interface PlaceCardProps {
  id: string;
  title: string;
  price: number;
  type: string;
  rating: number;
  previewImage: string;
  isPremium: boolean;
}

function FavoritesCitiesCard({
  id,
  title,
  price,
  type,
  rating,
  previewImage,
  isPremium,
}: PlaceCardProps): React.ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(AppRoute.Offer.replace(':id', id)); 
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={handleClick} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCitiesCard;
