pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./ERC20Base.sol";

contract ERC20own is IERC20, Ownable,ERC20Basic{
    function mint(address recipient, uint amount) public onlyOwner{
        require(totalSupply+amount>=totalSupply);

        totalSupply+=amount;
        balances[recipient]+=amount;

        emit Transfer(address(0),recipient,amount);
    }
}