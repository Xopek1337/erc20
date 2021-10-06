// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./ERC20Base.sol";

<<<<<<< HEAD
contract ERC20own is IERC20, Ownable,ERC20Basic{

    function mint(address recipient, uint amount) public onlyOwner{
=======
contract ERC20own is IERC20, Ownable, ERC20Basic{

    function mint(address recipient, uint amount) public onlyOwner {
>>>>>>> f02e0379af8f5be665c5df2ac771ff5bd9ca69b3
        totalSupply += amount;
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
