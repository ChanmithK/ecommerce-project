import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoIosStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<IoIosStarHalf key={i} className="text-yellow-400" />);
      } else {
        stars.push(<IoIosStarOutline key={i} className="text-gray-400" />);
      }
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default RatingStars;
