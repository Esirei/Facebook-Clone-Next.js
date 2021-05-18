import Image from 'next/image';
import { ComponentProps, FC } from 'react';

type PropWithIcon = { Icon: FC<ComponentProps<'svg'>>; src?: never };
type PropWithSRC = { src: string; Icon?: never };
type Props = { title: string } & (PropWithIcon | PropWithSRC);

const SidebarItem: FC<Props> = ({ Icon, title, src }) => (
  <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
    {Icon ? (
      // <p>Hello</p>
      <Icon className="h-8 w-8 text-blue-500" />
    ) : (
      <Image className="rounded-full" src={src} width={30} height={30} layout="fixed" />
    )}
    <span className="hidden sm:inline-flex font-medium">{title}</span>
  </div>
);

export default SidebarItem;
