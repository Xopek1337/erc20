// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
function c_0xc91fe6e9(bytes32 c__0xc91fe6e9) pure {}


import "./ERC20Base.sol";

abstract contract ERC20Mint is ERC20Base {
function c_0xb77020b9(bytes32 c__0xb77020b9) public pure {}


    address public owner;

    constructor(uint initialSupply_){c_0xb77020b9(0xff5cd507d189c92ce1839713add49adcb7d721af3c3580e74a3a9e38c8f97e42); /* function */ 

c_0xb77020b9(0xe7332179eaaa0247fa1474b9bab9c077fe837d42e53d341154af5fa342c80abf); /* line */ 
        c_0xb77020b9(0x90f851240954c768fee667c3edf6049decae3a5e124a07bd3a5797e537246b97); /* statement */ 
owner = msg.sender;
c_0xb77020b9(0xaed634ab9f1a5c2e070e844facfffc406c3a0500b11494bb0f637f6a971cdc4e); /* line */ 
        c_0xb77020b9(0xff79dddeea5b1331dc94daaee08a1bfd7dcd831aa3ba3868d78a2e55148495a1); /* statement */ 
totalSupply_ += initialSupply_;
c_0xb77020b9(0x0894a9968525c9a26aedd02767dfb87a5ffbbf42b628482272390efc20f55863); /* line */ 
        c_0xb77020b9(0x3853ed4c7247e517c309ca8025ec004fba7fed55345b11e4333d617c708b9f4e); /* statement */ 
balances[owner] = initialSupply_;
    }

    function mint(address recipient, uint amount) public{c_0xb77020b9(0x7dd706a5ed93d404ff3b92b0d7ed8da4f9711a24087a19833d4bc94247c842b7); /* function */ 

c_0xb77020b9(0x6fc14dc76436e7b53c1bef9d295f1652688c3b91f076e64b3673c2dfaf6f7abd); /* line */ 
        c_0xb77020b9(0xb525084a38c8d089ff137694f28c93b68407d448ae3e43f23ffaa93c2ac37bf9); /* requirePre */ 
c_0xb77020b9(0xef72e998930647826105acdd1a56d31df2b3951c9c61bcdcd565bd04c386d7af); /* statement */ 
require(msg.sender == owner);c_0xb77020b9(0x024eef1dcede355f58ce8de3e5c7fe01eda0aa7722571a8010f1dab45279da91); /* requirePost */ 


c_0xb77020b9(0x984316d07bc9685423f01e3cb5686cdfa1248d1fc8a24b4c25097204d6a126af); /* line */ 
        c_0xb77020b9(0x72288dd79b7c4112e2ee3f06c6c4ea1cb4e3bf25e00a7f77a21bfb3505fd4558); /* statement */ 
totalSupply_ += amount;
c_0xb77020b9(0xa4ac068ca257035ee6a4f22ed7850d932ee4c4b14c6ea38c3433de862ec4790f); /* line */ 
        c_0xb77020b9(0xfef9438e22d307ee19ece8a9d2f82d18c8706e257c535789d1c98a5aed2709f0); /* statement */ 
balances[recipient] += amount;

c_0xb77020b9(0xc66cf4710489fb6bb5114c58026bf90ae5e4b3437c42feeb377432a226ea9e45); /* line */ 
        c_0xb77020b9(0x07401ba7071a200ab3dd943377fa550df65cfef5b94e77a5b2d44981814da00b); /* statement */ 
emit Transfer(address(0), recipient, amount);
    }
}