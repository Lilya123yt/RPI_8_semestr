import React, { useState } from "react";

function ReviewsForm(): React.ReactElement {
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
    console.log("Submitted review:", reviewData);
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
              id={`${value}-stars`}
              type="radio"
              checked={reviewData.rating === value.toString()}
              onChange={handleRatingChange}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="rating">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
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
