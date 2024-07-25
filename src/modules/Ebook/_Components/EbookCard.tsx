import { generatePath, useLoaderData, useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { Button, ReviewStars } from '@UI/index';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiCircleInfo } from 'react-icons/ci';

interface IEbookCardProps {
  id: string;
  image_url: string;
  name: string;
  currency: string;
  display_price: string;
  num_of_reviews: number;
}

export default function EbookCard({
  id,
  image_url,
  name,
  currency,
  display_price,
  num_of_reviews,
}: IEbookCardProps): JSX.Element {
  const { isLoggedIn } = useLoaderData() as { isLoggedIn: boolean };

  const navigate = useNavigate();

  const handleNavigateGuestView = (ebookId: string) => {
    if (isLoggedIn) {
      navigate(generatePath(ROUTES.EBOOK_DETAILS, { id: ebookId }));
    } else {
      navigate(ROUTES.SIGN_IN);
    }
  };

  return (
    <div
      onClick={() => handleNavigateGuestView(id)}
      className="h-[450px] w-[356px] cursor-pointer bg-gray-500 hover:border hover:border-main">
      <div className="relative h-[450px] w-[356px]">
        <img className="h-full w-full" src={image_url} alt="" />
        <div className="absolute bottom-0 w-full p-2 text-white">
          <div>
            <p className="text-2xl font-bold">{name}</p>
            <div className="w-3">
              <ReviewStars rating={num_of_reviews} />
            </div>
            <div className="flex items-center gap-x-5 py-4">
              <p className="text-sm font-thin">{currency}</p>
              <p className="font-bold">{display_price}</p>
            </div>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex items-center justify-between gap-x-5">
                <Button className="w-full">Show details</Button>
                <CiCircleInfo size={40} className="border border-main p-1 text-main" />
              </div>
            ) : (
              <div className="flex items-center justify-between gap-x-5">
                <Button onClick={() => handleNavigateGuestView(id)} className="w-full">
                  Pay
                </Button>
                <AiOutlineShoppingCart
                  size={40}
                  onClick={() => handleNavigateGuestView(id)}
                  className="border border-main p-1 text-main"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
