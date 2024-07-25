import ebookService from '@app/api/service/ebook.service';
import { IebookRootDeatilsRoot } from '@servicesTypes/ebook.types';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Button } from '@UI/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadecn/components/ui/accordion';

export default function EbookDetails() {
  const { isLoggedIn } = useLoaderData() as { isLoggedIn: boolean };

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: ebooksDetailsData, isLoading } = useSWR(['ebooks-details', id], () =>
    isLoggedIn
      ? ebookService.ebooksDetilsAuth(id).then((data) => data as IebookRootDeatilsRoot)
      : ebookService.ebooksDetilsGest(id).then((data) => data as IebookRootDeatilsRoot)
  );

  const num_of_pages = ebooksDetailsData?.data?.attributes?.book?.num_of_pages;

  const getPageRanges = (totalPages: number, rangeSize: number) => {
    const ranges = [];
    for (let i = 1; i <= totalPages; i += rangeSize) {
      ranges.push(`${i} - ${Math.min(i + rangeSize - 1, totalPages)}`);
    }
    return ranges;
  };

  const pageRanges = num_of_pages ? getPageRanges(num_of_pages, 2) : ['1 - 2'];

  const [currentPageRange, setCurrentPageRange] = useState(pageRanges[0]);

  const handleAccordionClick = (range: string) => {
    setCurrentPageRange(range);
  };

  const handlePrevClick = () => {
    const currentIndex = pageRanges.indexOf(currentPageRange);
    if (currentIndex > 0) {
      setCurrentPageRange(pageRanges[currentIndex - 1]);
    }
  };

  const handleNextClick = () => {
    const currentIndex = pageRanges.indexOf(currentPageRange);
    if (currentIndex < pageRanges.length - 1) {
      setCurrentPageRange(pageRanges[currentIndex + 1]);
    }
  };

  if (isLoading) return <>isLoading ....</>;

  return (
    <div className="mx-auto my-2 max-w-[1440px] text-white">
      <div
        onClick={() => navigate(-1)}
        className="flex cursor-pointer items-center gap-2 py-3 text-2xl">
        <IoIosArrowBack />
        <p className="text-white">{ebooksDetailsData?.data?.attributes?.name}</p>
      </div>
      <div className="flex items-center justify-between gap-5">
        {/* accordion */}
        <div className="h-[700px] w-[500px] bg-neutral-600 px-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="Pages">
              <AccordionTrigger>Pages</AccordionTrigger>
              {pageRanges.map((range, index) => (
                <AccordionContent
                  className="cursor-pointer"
                  key={index}
                  onClick={() => handleAccordionClick(range)}>
                  {range}
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>Book mark</AccordionTrigger>
              page 1
            </AccordionItem>
          </Accordion>
        </div>
        {/* book view */}
        <div className="flex h-full w-full flex-col gap-10">
          <div className="flex justify-between text-3xl">
            {currentPageRange}
            <div>
              <Button>Book mark</Button>
            </div>
          </div>
          <div className="h-[600px] w-full flex-grow bg-neutral-600">
            <img
              className="h-full w-full"
              src={ebooksDetailsData?.data?.attributes?.book?.image_url}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button onClick={handlePrevClick} disabled={pageRanges.indexOf(currentPageRange) === 0}>
              Prev
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={pageRanges.indexOf(currentPageRange) === pageRanges.length - 1}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
