'use client';

import React from 'react';
import Logo from '@/common/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faBell,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const SideBar = () => {
  const navigationLinks = [
    {
      name: 'Launchpad',
      icon: faRocket,
      to: '/launch',
    },
    {
      name: 'Analytics',
      icon: faArrowTrendUp,
      to: '/analytics',
    },
    {
      name: 'Notifications',
      icon: faBell,
      to: '/notifications',
    },
  ];
  return (
    <div className='w-1/4 bg-gray-800 p-5 h-screen bg-gradient-linear'>
      <Logo height={30} />
      <div className=''>
        {navigationLinks.map((item) => (
          <Link key={item.name} href={item.to} className='mb-5'>
            <div className='flex gap-3 text-poppins'>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
