// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ERC20Base.sol";


contract ERC20Mint is ERC20Basic {

    address public owner;

    constructor(uint initialSupply_){
        owner = msg.sender;
        totalSupply_ += initialSupply_;
        _balances[owner] = initialSupply_;
    }

    function mint(address recipient, uint amount) public{
        require(msg.sender == owner);

        totalSupply += amount;
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
