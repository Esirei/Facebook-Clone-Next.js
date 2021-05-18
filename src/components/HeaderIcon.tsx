import { ComponentProps, FC } from 'react';

interface Props {
  Icon: FC<ComponentProps<'svg'>>;
  active?: boolean;
}

const HeaderIcon: FC<Props> = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer sm:h-14 md:px-10 rounded-xl md:hover:bg-gray-100 md:active:border-b-2 md:active:border-blue-500 group">
      <Icon
        className={`h-5 sm:h-7 text-center text-gray-500 group-hover:text-blue-500 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
