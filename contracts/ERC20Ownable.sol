// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC20Base.sol";

abstract contract ERC20own is IERC20, Ownable,ERC20Base{

    function mint(address recipient, uint amount) public onlyOwner{
        totalSupply_ += amount;
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
