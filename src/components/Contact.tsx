import { FC } from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  profile: string;
}

const Contact: FC<Props> = ({ name, profile }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <div className="relative h-12 w-12">
        <Image src={profile} objectFit="cover" layout="fill" className="rounded-full" />
        <div className="absolute bottom-1 right-0 bg-green-400 h-3 w-3 rounded-full" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Contact;
