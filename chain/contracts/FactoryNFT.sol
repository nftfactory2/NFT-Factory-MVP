// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error moreFunds();
error UriNotMapped();
error WRONG_INITIALIZATION();

contract SimpleCollectible is ERC721, Ownable {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;
  mapping(uint=>string) tokenURIs;
  Data[] URIS;
  struct Data{
    uint index;
    string uri;
    uint256 mintFee;
  }


	constructor(
		string memory Name,
		string memory Symbol,
		string[] memory _URIs,
    uint256[] memory _mintFee
	) ERC721(Name, Symbol) {

    if(_URIs.length != _mintFee.length){
      revert WRONG_INITIALIZATION();
    }
    for (uint i = 0; i < _URIs.length; i++) {
      URIS.push(Data(i,_URIs[i],_mintFee[i]));
    }
	}

	function createCollectible(
		address recipient,
    uint256 _uriIndex
	) payable external returns (uint256) {
		
    Data memory IndexUri = URIS[_uriIndex];
    uint256 amount = IndexUri.mintFee;
    if (msg.value < (amount * 1e18)) {
			revert moreFunds();
		}
		uint256 tokenID = _tokenIds.current();
		_safeMint(recipient, tokenID);
    if(_createTokenURI(tokenID, _uriIndex) != true){
        revert UriNotMapped();
      }
		_tokenIds.increment();
		return tokenID;

	}

  function _createTokenURI(uint256 tokenId, uint256 _uriIndex)internal returns(bool success){
        Data memory IndexUri = URIS[_uriIndex];
        string memory _uri = IndexUri.uri;
        tokenURIs[tokenId] = _uri;
        return true;
    }

function tokenURI(uint tokenId) public view virtual override returns(string memory){
        return tokenURIs[tokenId];
    }

function redeem( uint256 _tokenId)external onlyOwner {
    _burn(_tokenId);
}  

function adjustMintFee(uint index, uint256 _newMintFee) external onlyOwner {
  Data storage _data = URIS[index];
  _data.mintFee = _newMintFee;  
}

function adjustURI(uint index, string memory _newURI) external onlyOwner {
  Data storage data = URIS[index];
  data.uri = _newURI;  
}

}














contract Create2Factory {

  address[] public marketplace;

	event Deploy(address addr, string Name);

	function deploy(
		string memory Name,
		string memory Symbol,
		string[] memory _URIs,
    uint[] memory _mintFee
	) external {
		SimpleCollectible _contract = new SimpleCollectible(Name, Symbol, _URIs, _mintFee);
    marketplace.push(address(_contract));
		emit Deploy(address(_contract), Name);
	}


}
