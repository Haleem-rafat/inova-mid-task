import classNames from 'classnames';

interface ILatestNewsCardProps {
  img: string;
  title: string;
  className: string;
  chips: string[];
}
export default function LatestNewsCard({
  img,
  title,
  chips,
  className,
}: ILatestNewsCardProps): JSX.Element {
  return (
    <div className={classNames('mx-auto h-[345px] overflow-hidden bg-gray-600', className)}>
      <div className="relative h-[345px]">
        <img className="h-full w-full object-cover" src={img} />

        <div className="absolute bottom-0 p-4 text-white">
          <div className="flex gap-x-2">
            {chips.map((e) => (
              <div
                key={e}
                className="bg-secaond rounded-full px-4 text-center text-sm text-white/50">
                {e}
              </div>
            ))}
          </div>
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
}
