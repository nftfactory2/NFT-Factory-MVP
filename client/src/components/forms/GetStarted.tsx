import React from 'react';
import { orbitron, poppins } from '@/app/styles/fonts';
import Button from '@/common/Button';

interface Props {
  nextPage: () => void
}

const GetStarted: React.FC<Props> = ({nextPage}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col w-3/4 ml-5 h-4/6 text-center ${poppins.className} `}
    >
      <h3 className={`${orbitron.className} text-primary text-4xl mb-3`}>
        Launchpad project application
      </h3>
      <p className='mb-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className='flex justify-around items-center w-full'>
          <Button
            className='bg-gradient-linear px-6 py-3 rounded-md'
            handleClick={nextPage}
          >
            Apply
          </Button>
          <Button
            className='px-6 py-3'
            as='link'
            href='/guide'
            style={{
              border: '2px solid transparent',
              borderImage: 'linear-gradient(to right, #702D6C, #FFC72C) 1',
            }}
          >
            Guide
          </Button>
        </div>
    </div>
  );
};

export default GetStarted;
