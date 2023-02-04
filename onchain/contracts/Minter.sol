// contracts/Minter.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Minter is ERC721URIStorage, Ownable {
    uint256 private _currentTokenId = 0; //Token ID here will start from 1

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    function mint(
        address _to,
        string memory _tokenURI
    ) public returns (uint256) {
        uint256 newTokenId = _currentTokenId + 1;
        _currentTokenId++;
        _mint(_to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        return newTokenId;
    }

    function _burn(uint256 tokenId) internal virtual override {}
}
