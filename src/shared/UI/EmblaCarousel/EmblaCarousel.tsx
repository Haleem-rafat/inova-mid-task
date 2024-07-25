import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import React, { useCallback } from 'react';

import { Button } from '..';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import imageByIndex from './imageByIndex';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  withNvigator?: boolean;
  className?: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, withNvigator, className } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onButtonClick);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div className={className}>
                <img
                  className="embla__slide__img h-full w-full object-cover"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute text-center text-white"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <p className="text-xl font-bold">TRAINING COURSES, BOOKS</p>
        <p className="py-3 text-4xl font-bold italic">
          MAKE YOUR HEALTHY BODY <br></br>STRONG IS OUR RESPONSIBILITY
        </p>
        <div className="mx-auto w-32">
          <Button>About US</Button>
        </div>
      </div>

      {withNvigator && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? 'embla__dot--selected' : '')}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
