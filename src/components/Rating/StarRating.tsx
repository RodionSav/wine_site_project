import React, { useState } from 'react';
import './stars.scss';

type Props = {
  totalStars: number,
  editable: boolean,
  // averageRating?: number,
  rating: number,
  setRating: (rating: number) => void,
}

export const StarRating: React.FC<Props> = ({
  totalStars,
  editable,
  // averageRating = 0,
  rating,
  setRating
}) => {
  // const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    if (editable) {
      setRating(value);
      // Здесь можно добавить логику для отправки оценки на сервер или ее сохранения в состоянии компонента родителя
    }

    console.log(rating);
  };

  const renderStars = () => {
    const stars = Array.from({ length: totalStars }, (_, index) => {
      const ratingValue = index + 1;
      const isActive = ratingValue <= rating;
      const starClass = isActive ? 'star_active' : 'star';
      return (
        <span
          key={index}
          className={starClass}
        //   style={{ cursor: editable ? 'pointer' : 'default', color: ratingValue <= averageRating ? 'gold' : 'gray' }}
          onClick={() => handleClick(ratingValue)}
        >
          {/* <img src='images2/star-not-active.svg'/> */}
        </span>
      );
    });

    return stars;
  };

  return (
    <div className='stars'>
      {renderStars()}
      {/* <p>{averageRating.toFixed(1)} из {totalStars.toFixed(1)}</p> */}
    </div>
  );
};

export default StarRating;
