import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavTools = () => {
  return (
    <>
      <Button className='bg-gradient-linear px-3 py-1 text-sm'>
        Connect wallet
      </Button>
      <FontAwesomeIcon
        icon={faUser}
        style={{ color: '#FFC72C', cursor: 'pointer' }}
      />
    </>
  );
};

export default NavTools;
