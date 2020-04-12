pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";


contract SimpleToken is
    ERC20Detailed("simple_token", "ST", 18),
    ERC20Mintable,
    ERC20Burnable
{
    constructor() public {
        // initialize
    }
}
