import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import nft1 from '../../Assets/NFT4 (1).png';
import { Link } from 'react-router-dom';

const MarketPlace = () => {
  return (
    <div className='marketplace'>
      <div className='introduction'>
        <div className='text-zone'>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} />

            <input placeholder='search' />
          </div>
          <h1>
            Explore thousands of digital assets from trending to curated
            collections
          </h1>
        </div>

        <div className='nftGroup-picture'>
          <h1>NFTS SPECIAL</h1>
          <img src={nft1} alt='' />
          <div className='groupnftdetails'>
            <div className='nftName'>
              <p>Bake shop NFTs</p> <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className='price'>
              <div className='left-span'>
                <small>floor</small>
                <p>0.0025 ETH</p>
              </div>
              <div className='right-span'>
                <small>Total Volume</small>
                <p>0.0025 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='trending-header'>
        <h1>Trending Collections</h1>
      </div>
      <div className='trending-header'>
        <p>
          Explore series of our regularly updated trending collection for you
        </p>
      </div>

      <section className='nft-tray'>
        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft1} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft1} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft1} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='nftscollections'>
        <div className='trending-header'>
          <h1>Trending Collections</h1>
        </div>
        <div className='trending-header'>
          <p>
            Explore series of our regularly updated trending collection for you
          </p>
        </div>

        <section className='nft-tray'>
          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft1} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='details'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft1} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='viewdetails'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft1} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='viewdetails'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MarketPlace;
