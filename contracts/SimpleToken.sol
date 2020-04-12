pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";


contract SimpleToken is ERC20("simple_token", "ST"), ERC20Mintable, ERC20Burnable {
    constructor() {
        // initialize
    }
}
