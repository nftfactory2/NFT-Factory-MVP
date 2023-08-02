// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SimpleCollectible is ERC721,Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    

    constructor (string memory Name , string memory Symbol,string memory _tokenURI) public ERC721(Name, Symbol){
      tokenURI = _tokenURI;
    }

    function createCollectible( address recipient) public   onlyOwner returns (uint256){
         _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}


contract Create2Factory{
  event Deploy(address addr);

  function deploy( string memory Name, string memory Symbol, string memory _tokenURI,uint _salt) external{
  SimpleCollectible _contract = new SimpleCollectible{
    salt: bytes32(_salt)
  }(Name,Symbol,_tokenURI);

  emit Deploy(address(_contract));
  } 

  function getAddress(bytes memory bytecode, uint _salt) public  view returns(address){
    bytes32 hash =  keccak256(abi.encodePacked(  // The address will be the last 20 digits of this hash
   bytes1(0xff),address(this),_salt, keccak256(bytecode) 
));

return address(uint160(uint(hash)));
  }

  function getByteCode(address _owner) public  pure returns (bytes memory){
      bytes memory bytecode = type(DeployWithCreate2).creationCode;

    return  abi.encodePacked(bytecode,abi.encode(_owner));
  }

}