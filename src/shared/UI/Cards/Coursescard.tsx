import { ROUTES } from '@constants/routes';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { generatePath, useNavigate } from 'react-router-dom';
import { Button, ReviewStars } from '..';

interface ICoursescardProps {
  id: string;
  image_url: string;
  name: string;
  currency: string;
  display_price: string;
  num_of_reviews: number;
}

export default function Coursescard({
  id,
  image_url,
  name,
  currency,
  display_price,
  num_of_reviews,
}: ICoursescardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(generatePath(ROUTES.COURSEDETAILS, { id }))}
      key={id}
      className="hover:border-main h-[450px] w-[356px] cursor-pointer bg-gray-500 hover:border">
      <div className="relative h-[450px] w-[356px]">
        <img className="h-full w-full" src={image_url} alt="" />
        <div className="absolute bottom-0 w-full p-2 text-white">
          <div>
            <p className="text-2xl font-bold">{name}</p>
            <div className="w-3">
              <ReviewStars rating={num_of_reviews} />
            </div>
            <div className="flex items-center gap-x-5 py-4">
              <p className="text-sm font-thin">{currency} </p>
              <p className="font-bold">{display_price} </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-5">
            <Button className="w-full">Pay</Button>
            <AiOutlineShoppingCart size={40} className="border-main text-main border p-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
