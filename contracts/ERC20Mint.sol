// SPDX-License-Identifier: MIT
<<<<<<< HEAD
pragma solidity >=0.8.0 <0.9.0;
=======
pragma solidity >=0.4.22 <0.9.0;
>>>>>>> f02e0379af8f5be665c5df2ac771ff5bd9ca69b3

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