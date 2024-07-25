import ExploreOurCourse from './_Componets/ExploreOurCourse';
import HeroCarouselSection from './_Componets/HeroCarouselSection';
import LatestNews from './_Componets/LatestNews';

export default function Home(): JSX.Element {
  return (
    <>
      <HeroCarouselSection />
      <div className="mx-auto max-w-7xl">
        <LatestNews />
        <ExploreOurCourse />
      </div>
    </>
  );
}
