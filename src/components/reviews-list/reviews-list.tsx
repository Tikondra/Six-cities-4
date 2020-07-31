import * as React from "react";
import ReviewsItem from "../reviews-item/reviews-item";
import {nanoid} from "nanoid";

interface IReviewsListProps {
  reviews: [];
}

const getReview = (reviews) => reviews.map((reviewItem) => {
  return (
    <ReviewsItem
      key = {nanoid()}
      review = {reviewItem}
    />
  );
});

const ReviewsList: React.FC<IReviewsListProps> = ({reviews}: IReviewsListProps) => {
  return (
    <ul className="reviews__list">
      {getReview(reviews)}
    </ul>
  );
};

export default ReviewsList;
