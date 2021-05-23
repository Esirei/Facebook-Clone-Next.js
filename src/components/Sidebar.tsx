import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/client';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [session] = useSession();
  return (
    <div className="px-2 max-w-[360px] xl:min-w-[300px]">
      <div className="sticky top-[72px] py-2 sm:py-4">
        <SidebarItem src={session.user.image} title={session.user.name} />
        <SidebarItem Icon={UsersIcon} title="Friends" />
        <SidebarItem Icon={UserGroupIcon} title="Groups" />
        <SidebarItem Icon={ShoppingBagIcon} title="Marketplace" />
        <SidebarItem Icon={DesktopComputerIcon} title="Watch" />
        <SidebarItem Icon={CalendarIcon} title="Events" />
        <SidebarItem Icon={ClockIcon} title="Memories" />
        <SidebarItem Icon={ChevronDownIcon} title="See More" />
      </div>
    </div>
  );
};

export default Sidebar;
