import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const Widgets = () => {
  return (
    <div className="lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map(contact => (
        <Contact key={contact.name} {...contact} />
      ))}
    </div>
  );
};

export default Widgets;

const contacts = [
  { name: 'Elon Musk', profile: '/images/elon.jpg' },
  { name: 'Jeff Bezoz', profile: '/images/bezoz.jpg' },
  { name: 'Bill Gates', profile: '/images/gates.jpg' },
  { name: 'Mark Zuckerberg', profile: '/images/zuckerberg.jpg' },
];
