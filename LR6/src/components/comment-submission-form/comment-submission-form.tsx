import React, { useState } from "react";
import { Review } from "../../types/reviews";

type ReviewsFormProps = {
  onAddReview: (review: Review) => void;
};

function ReviewsForm({ onAddReview }: ReviewsFormProps): React.ReactElement {
  const [reviewData, setReviewData] = useState({
    rating: "",
    review: "",
  });

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewData({ ...reviewData, rating: event.target.value });
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData({ ...reviewData, review: event.target.value });
  };

  const isSubmitDisabled = reviewData.review.length < 50 || reviewData.rating === "";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const newReview: Review = {
      id: crypto.randomUUID(), 
      user: {
        name: "User",
        avatarUrl: "/img/avatar-angelina.jpg",
        isPro: false,
      },
      comment: reviewData.review,
      rating: parseInt(reviewData.rating, 10),
      date: new Date().toISOString(),
    };

    onAddReview(newReview); 
    setReviewData({ rating: "", review: "" });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-dots`}
              type="radio"
              checked={reviewData.rating === value.toString()}
              onChange={handleRatingChange}
            />
            <label htmlFor={`${value}-dots`} className="reviews__rating-label form__rating-label" title="rating">
              <span style={{ fontSize: "24px", marginRight: "5px", cursor: "pointer" }}>
                {"•".repeat(value)}
              </span>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.review}
        onChange={handleReviewChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
