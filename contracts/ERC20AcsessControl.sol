// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERC20Base.sol";


<<<<<<< HEAD
abstract contract ERC20AC is IERC20, AccessControl,ERC20Base{
=======
contract ERC20AC is IERC20, AccessControl, ERC20Basic{
>>>>>>> b994856167a68ae4a7750a8a913420ffde08af62
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function promoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(MINTER_ROLE, minter);
    }

    function remoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){
        revokeRole(MINTER_ROLE, minter);
    }

    function mint(address recipient, uint amount) public onlyRole(MINTER_ROLE){
<<<<<<< HEAD

        totalSupply_ += amount;
=======
        totalSupply += amount;
>>>>>>> b994856167a68ae4a7750a8a913420ffde08af62
        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }
}
