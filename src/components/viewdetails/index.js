import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import nft1 from '../../Assets/NFT4 (1).png';
import { Link } from 'react-router-dom';
const Details = () => {
  return (
    <>
      <div className='introduction'>
        <div className='text-zone'>
          <h1>About Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='active'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='group-picture'>
          <img src={nft1} alt='' />
        </div>
      </div>
    </>
  );
};

export default Details;
