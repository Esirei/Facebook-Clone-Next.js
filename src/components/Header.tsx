import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

const Header = () => {
  const [session] = useSession();
  return (
    <div className="flex sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image src="/images/logo.png" width={40} height={40} layout="fixed" />
        <div className="hidden md:inline-flex items-center ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden lg:inline-flex flex-shrink ml-2 bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        {/*Profile pic*/}
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          className="cursor-pointer rounded-full"
          onClick={() => signOut()}
        />
        <p className="hidden lg:inline-flex whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
