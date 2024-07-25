import ExploreOurCourseCard from '@UI/Cards/ExploreOurCourseCard';
import { useNavigate } from 'react-router-dom';
import { ExploreOurCourseData } from '../_data/LatestNewsData';

export default function ExploreOurCourse(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <h1 className="py-5 text-center font-bold italic">EXPLORE OUR COURSES</h1>
      <div className="mx-auto flex w-full justify-center gap-10">
        {ExploreOurCourseData.map((e) => (
          <ExploreOurCourseCard
            key={e.title}
            title={e.title}
            paragraph={e.parg}
            onClick={() => navigate(e.routes)}
          />
        ))}
      </div>
    </div>
  );
}
