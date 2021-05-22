import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  src: string;
  profile: string;
}

const Story: FC<Props> = ({ name, src, profile }) => (
  <div
    className="relative p-3 h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer transition
    duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
    <Image
      src={profile}
      height={40}
      width={40}
      layout="fixed"
      className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
    />
    <Image
      src={src}
      layout="fill"
      className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
    />
    <p className="hidden absolute lg:flex bottom-2 z-50 text-white">{name}</p>
  </div>
);

export default Story;
