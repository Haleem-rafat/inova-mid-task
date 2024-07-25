import classNames from 'classnames';
import React from 'react';

interface ReviewStarsProps {
  rating: number;
  size?: 'defult' | 'lg';
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, size = 'defult' }) => {
  const starPercentage = (rating / 5) * 100;
  const starStyle = {
    width: `${starPercentage * 2.5}% `,
  };

  return (
    <div className="mx-auto w-[100px]">
      <div className="relative h-8 w-10">
        <div
          className={classNames('absolute left-0 top-0 h-full w-full text-gray-300', {
            'text-base': size === 'defult',
            'text-xl': size === 'lg',
          })}>
          ★★★★★
        </div>
        <div
          style={starStyle}
          className={classNames('text-main absolute left-0 top-0 h-full w-full overflow-hidden', {
            'text-base': size === 'defult',
            'text-xl': size === 'lg',
          })}>
          <div>★★★★★</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStars;
