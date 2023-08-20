'use client';
import React, { useEffect } from 'react';
import Logo from '@/common/Logo';
import {
  faArrowTrendUp,
  faBell,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { poppins } from '@/fonts/fonts';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathName = usePathname();

  const navigationLinks = [
    {
      name: 'Launchpad',
      icon: faRocket,
      to: '/launchpad',
    },
    {
      name: 'Analytics',
      icon: faArrowTrendUp,
      to: '/analytics',
    },
    {
      name: 'Notifications',
      icon: faBell,
      to: '/notification',
    },
  ];
  return (
    <div
      className='bg-gray-800 py-10'
      style={{
        background: '#130712',
        width: '15%',
      }}
    >
      <div className='px-4'>
        <Logo height={30} />
      </div>
      <div className='inline-flex flex-col items-start py-10'>
        {navigationLinks.map(({ name, to, icon }) => (
          <Link key={name} href={to} className={`${poppins.className} text-sm`}>
            <div
              className='flex gap-5 items-center px-4 py-3'
              style={{
                margin: '1.25rem 0',
                backgroundColor:
                  to === pathName ? 'rgba(255, 199, 44, 0.12)' : 'none',
              }}
            >
              <FontAwesomeIcon
                icon={icon}
                style={{
                  marginRight: '0.5rem',
                }}
              />
              <span>{name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
