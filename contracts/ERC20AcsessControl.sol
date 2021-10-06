// SPDX-License-Identifier: MIT
<<<<<<< HEAD
pragma solidity >=0.8.0 <0.9.0;
=======
pragma solidity >=0.4.22 <0.9.0;
>>>>>>> f02e0379af8f5be665c5df2ac771ff5bd9ca69b3

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERC20Base.sol";


contract ERC20AC is IERC20, AccessControl,ERC20Basic{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC20("ERC20AC", "ERC") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function promoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(MINTER_ROLE, minter);
    }

    function remoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){
        revokeRole(MINTER_ROLE, minter);
    }

    function mint(address recipient, uint amount) public onlyRole(MINTER_ROLE){

        totalSupply += amount;
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
