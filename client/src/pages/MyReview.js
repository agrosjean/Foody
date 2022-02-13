import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import moment from "moment";

function MyReview() {
  const [userReviews, setUserReviews] = useState([]);
  const userID = localStorage.getItem("id");

  useEffect(() => {
    fetch(`/reviews/by-user-id/${userID}`)
      .then((response) => response.json())
      .then((userReviewsJson) => {
        console.log(userReviewsJson, "jaon <===");
        setUserReviews(userReviewsJson);
      });
  }, [userID]);

  const handleDeleteClick = (reviewID) => {
    fetch(`/reviews/${reviewID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((resp) => {
      // After send success, then refresh page
      window.location.reload();
    });
  };

  return (
    <>
      <h1>My Reviews</h1>
      <ul>
        {userReviews?.map((review) => {
          return (
            <li key={review.id}>
              {moment(review.created_at).format("MMMM Do YYYY")}:{" "}
              {review.restaurant.name} - {review.comment}
              <Button onClick={() => handleDeleteClick(review.id)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default MyReview;
