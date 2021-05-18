import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Header = () => (
  <div className="flex sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
    <div className="flex items-center">
      <Image src="/images/logo.png" width={40} height={40} layout="fixed" />
      <div className="flex flex-row items-center ml-2 rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500"
        />
      </div>
    </div>
  </div>
);

export default Header;
