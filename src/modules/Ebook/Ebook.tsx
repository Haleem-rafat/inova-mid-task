import { useState } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import { IebookRoot } from '@servicesTypes/ebook.types';
import ebookService from '@app/api/service/ebook.service';
import EbookCardSkeleton from './_Components/CoursesScelaton';
import EbookCard from './_Components/EbookCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shadecn/components/ui/carousel';

export default function Ebook() {
  const [productType, setSubProductType] = useState('All');

  const { data: ebooksListData, isLoading } = useSWR(['e-books-list', productType], () =>
    ebookService.ebooksList(productType).then((data) => data as IebookRoot)
  );

  const filterValues = [
    { lable: 'All', value: 'All' },
    { lable: 'Flexiblity traing', value: '6' },
    { lable: 'Weight training ', value: '5' },
    { lable: 'Cardio training', value: '4' },
    { lable: 'Courses', value: '2' },
    { lable: 'Fitness mindset', value: '7' },
  ];

  return (
    <div className="mx-auto mt-4 max-w-[1440px] text-white">
      <h1 className="text-4xl">E-books</h1>
      {/* filter */}
      <div>
        <Carousel className="px-8 py-4 text-white">
          <CarouselContent>
            {filterValues.map((f) => (
              <CarouselItem className="basis-1/4 items-center pl-4" key={f.value}>
                <button
                  onClick={() => setSubProductType(f?.value)}
                  className={classNames(
                    { 'bg-main px-10 py-2': productType === f.value },
                    'px-10 py-2'
                  )}
                  type="button">
                  {f.lable}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-main" />
          <CarouselNext className="bg-main" />
        </Carousel>
      </div>
      <div className="flex gap-10">
        {/* card */}
        {isLoading ? (
          <EbookCardSkeleton />
        ) : ebooksListData?.data.length === 0 ? (
          <div>oops, no data</div>
        ) : (
          ebooksListData?.data?.map((e) => (
            <EbookCard
              id={e.id}
              key={e.id}
              image_url={e?.attributes?.book?.image_url}
              name={e?.attributes.name}
              currency={e?.attributes.currency}
              display_price={e?.attributes.display_price}
              num_of_reviews={e?.attributes.num_of_reviews}
            />
          ))
        )}
      </div>
    </div>
  );
}
