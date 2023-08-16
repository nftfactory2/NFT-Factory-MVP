import Button from '@/common/Button';
import SideBar from '@/common/navs/side/SideNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Apply from './apply/page';

const LaunchPad = () => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='flex-1 flex-col px-4 py-10'>
        <div className='flex justify-end items-center gap-4 w-11/12'>
          <Button className='bg-gradient-linear px-3 py-1 text-sm'>
            Connect wallet
          </Button>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: '#FFC72C', cursor: 'pointer' }}
          />
        </div>
        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
