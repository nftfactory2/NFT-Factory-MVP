import Button from '../Button';
import Image from 'next/image';

const NavTools = () => {
  return (
    <>
      <Button className='bg-gradient-linear px-3 py-2 text-sm'>
        Connect wallet
      </Button>
      <Image height={25} width={25} src={'/profile.svg'} alt={'profile'} style={{ cursor: 'pointer' }} />
    </>
  );
};

export default NavTools;
