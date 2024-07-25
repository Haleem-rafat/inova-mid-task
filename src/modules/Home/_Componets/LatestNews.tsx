import LatestNewsCard from '@UI/Cards/LatestNewsCard';
import { LatestNewsData } from '../_data/LatestNewsData';

export default function LatestNews(): JSX.Element {
  return (
    <div>
      <h1 className="mt-28 text-center font-bold italic text-white">Latest News</h1>
      <div className="mx-auto grid grid-cols-12 gap-5 ">
        {/* card */}
        {LatestNewsData.map((LatestData, index) => (
          <LatestNewsCard
            className={index < 3 ? 'col-span-4' : 'col-span-3'}
            key={index}
            title={LatestData.title}
            chips={LatestData.chips}
            img={LatestData.img}
          />
        ))}
      </div>
    </div>
  );
}
