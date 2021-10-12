// SPDX-License-Identifier: MIT
<<<<<<< HEAD:contracts/ERC20Minit.sol
=======

>>>>>>> b994856167a68ae4a7750a8a913420ffde08af62:contracts/ERC20Mint.sol
pragma solidity >=0.8.0 <0.9.0;

import "./ERC20Base.sol";

abstract contract ERC20Minit is ERC20Base {

    address public owner;

    constructor(uint initialSupply_){
        owner = msg.sender;
        totalSupply_ += initialSupply_;
        balances[owner] = initialSupply_;
    }

    function mint(address recipient, uint amount) public{
        require(msg.sender == owner);

        totalSupply_ += amount;
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
