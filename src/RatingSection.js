import React, { useState } from 'react';

const RatingSection = () => {
  const defaultRating = 4.96;
  const defaultPeople = 10;
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(defaultRating); // Set totalRatings to 1 to represent the default rating

  const handleRatingSubmit = () => {
    setRating(rating);
    setTotalRatings(((defaultRating * defaultPeople + rating) / (defaultPeople + 1)).toFixed(2));
  };

  return (
    <div className="ratingSection">
      <h2>Rating</h2>
      <select value={rating} onChange={(e) => setRating(parseFloat(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p>Average Rating: {totalRatings}</p>
      <button onClick={handleRatingSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingSection;
