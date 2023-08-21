import Image from 'next/image';
import Button from '../Button';
import { orbitron } from '@/fonts/fonts';

interface NavToolsProps {
  title?: string;
  isMenu?: boolean;
}

const NavTools: React.FC<NavToolsProps> = (props) => {
  const { title, isMenu = false } = props;
  return (
    <>
      {isMenu ? (
        <div className='flex justify-between'>
          <h2 className={`${orbitron.className} text-2xl`}>{title}</h2>
          <div className='flex flex-row gap-4 items-center'>
            <Button className='bg-gradient-linear px-3 py-2 text-sm'>
              Connect wallet
            </Button>
            <Image
              height={25}
              width={25}
              src={'/profile.svg'}
              alt={'profile'}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      ) : (
        <>
          <Button className='bg-gradient-linear px-3 py-2 text-sm'>
            Connect wallet
          </Button>
          <Image
            height={25}
            width={25}
            src={'/profile.svg'}
            alt={'profile'}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
    </>
  );
};

export default NavTools;
