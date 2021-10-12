// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC20Base.sol";

<<<<<<< HEAD
abstract contract ERC20own is IERC20, Ownable,ERC20Base{

    function mint(address recipient, uint amount) public onlyOwner{
        totalSupply_ += amount;
=======
contract ERC20own is IERC20, Ownable,ERC20Basic{

    function mint(address recipient, uint amount) public onlyOwner{
        totalSupply += amount;
>>>>>>> b994856167a68ae4a7750a8a913420ffde08af62
        balances[recipient] += amount;
        
        emit Transfer(address(0), recipient, amount);
    }
}
