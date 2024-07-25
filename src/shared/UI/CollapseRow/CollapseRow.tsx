import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface ICollapseRowProps {
  Title: string;
  dataRow?: JSX.Element;
}

export const CollapseRow = ({ Title, dataRow }: ICollapseRowProps): JSX.Element => {
  const [onClick, setOnclick] = useState(true);

  return (
    <div className="w-full border-b">
      <motion.div
        className="my-8  overflow-hidden rounded-lg "
        initial={{ height: '44px' }}
        animate={{ height: onClick ? '44px' : 'auto' }}
        transition={{ duration: 0.5 }}>
        <div
          onClick={() => setOnclick((p) => !p)}
          className="flex cursor-pointer items-center justify-between">
          <h1 className="py-3 text-3xl font-semibold text-white">{Title}</h1>
          <IoIosArrowDown
            className={`${
              onClick
                ? 'origin-center -rotate-180 delay-150 duration-150'
                : 'origin-center delay-150 duration-150'
            } mt-2 text-main `}
            size={25}
          />
        </div>
        <p className="flex flex-col gap-4">{dataRow}</p>
      </motion.div>
    </div>
  );
};
