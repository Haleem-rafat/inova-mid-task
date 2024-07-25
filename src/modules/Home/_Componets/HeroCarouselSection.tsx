import EmblaCarousel from '@UI/EmblaCarousel/EmblaCarousel';
import '@UI/EmblaCarousel/style/base.css';
import '@UI/EmblaCarousel/style/embla.css';
import '@UI/EmblaCarousel/style/sandbox.css';
import { EmblaOptionsType } from 'embla-carousel-react';

export default function HeroCarouselSection(): JSX.Element {
  const OPTIONS: EmblaOptionsType = { align: 'start', loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <div>
        <EmblaCarousel
          className="h-[200px] md:h-[504px]"
          slides={SLIDES}
          options={OPTIONS}
          withNvigator
        />
      </div>
    </div>
  );
}
