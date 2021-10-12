// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
function c_0x8009b115(bytes32 c__0x8009b115) pure {}


import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC20Base.sol";

abstract contract ERC20own is IERC20, Ownable,ERC20Base{
function c_0x20239cfe(bytes32 c__0x20239cfe) public pure {}


    function mint(address recipient, uint amount) public onlyOwner{c_0x20239cfe(0x6a17ce391078f886ad66e150fbd9278baddc6f5ff5c9958560ec6c45c5ca43fe); /* function */ 

c_0x20239cfe(0x87e8c795ca5a2c3e026dabe50c27d79afe558b7e20e9656ccf32a5e9685b6173); /* line */ 
        c_0x20239cfe(0x3532e9257959d6dbbd003daef766c6d2632bf4ea9dff40345bc262bf2ae40953); /* statement */ 
totalSupply_ += amount;
c_0x20239cfe(0xe69e5463a797961f11e3bafa1a90efdfb25b7170ea2c6c63a70956f0302d5226); /* line */ 
        c_0x20239cfe(0x9a0213e46d9967a37af70b4d2a093a386939e4956a028ffac8bb2efc24dd6743); /* statement */ 
balances[recipient] += amount;

c_0x20239cfe(0xb9f423be789bd34ecbe0124a7ed152534aefecfaca60c3718b89717eb777aded); /* line */ 
        c_0x20239cfe(0x76067b209249b323b1f4c32f24b246c91af98cabc7ab48293c99eb6709708d21); /* statement */ 
emit Transfer(address(0), recipient, amount);
    }
}
