'use client';
import SideBar from '@/common/navs/side/SideNavigation';

const Dashboard = () => {
  return (
    <div className='flex h-screen relative'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <div className='text-white'>dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
