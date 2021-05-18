import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/client';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [session] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[360px] xl:min-w-[300px]">
      <SidebarItem src={session.user.image} title={session.user.name} />
      <SidebarItem Icon={UsersIcon} title="Friends" />
      <SidebarItem Icon={UserGroupIcon} title="Groups" />
      <SidebarItem Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarItem Icon={DesktopComputerIcon} title="Watch" />
      <SidebarItem Icon={CalendarIcon} title="Events" />
      <SidebarItem Icon={ClockIcon} title="Memories" />
      <SidebarItem Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
