import { Button } from '..';

interface IExploreOurCourseCardprops {
  title: string;
  paragraph: string;
  onClick: () => void;
}
export default function ExploreOurCourseCard({
  title,
  paragraph,
  onClick,
}: IExploreOurCourseCardprops): JSX.Element {
  return (
    <div>
      <div className="mx-auto h-[290px] w-[246px] bg-gray-500 p-3">
        <h1 className="text-3xl">{title}</h1>
        <p className="pt-3 text-sm">{paragraph}</p>
        <div className="flex w-32 justify-start pt-5">
          <Button onClick={onClick}>See All</Button>
        </div>
      </div>
    </div>
  );
}
