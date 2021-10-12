// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
function c_0xee491ece(bytes32 c__0xee491ece) pure {}


import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERC20Base.sol";


abstract contract ERC20AC is IERC20, AccessControl,ERC20Base{
function c_0x2dcb300b(bytes32 c__0x2dcb300b) public pure {}

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() {c_0x2dcb300b(0x0aa2e85e0c9dd4b68ccd587495aed32809d3ae4b8532ecd1fd21b6dfc73cd96b); /* function */ 

c_0x2dcb300b(0x54861b81f7bc99cd202ca14a048f8eb8b80178ec3f39218ee1e03c45d7e91f86); /* line */ 
        c_0x2dcb300b(0xd977722def12f17cf1ce4258c7099ada5bdbf2b73dfbe9db325be2fb4e7f7276); /* statement */ 
_setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function promoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){c_0x2dcb300b(0xc3f4fbb283c75472e5460c407b44348388f2448cc9e0846c4bf98823ea26b42b); /* function */ 

c_0x2dcb300b(0x9a24306975ff059f19425109111dd9272114eed3583af7a1be041b599e7cac92); /* line */ 
        c_0x2dcb300b(0xda7235cb8f624266fa155748957b7b2f914927492018192b408744b3672eb39d); /* statement */ 
grantRole(MINTER_ROLE, minter);
    }

    function remoteMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE){c_0x2dcb300b(0x30e810a2d46ad6657be58cff0df8045ac9321287658d1c04481a38a20600521f); /* function */ 

c_0x2dcb300b(0x7ba338d2256432dc813aef1b46f8625eace0e94767fe5c7e65d4996161160d79); /* line */ 
        c_0x2dcb300b(0xc5a2a84407141a6b9ecca8039402154048c2e33b52a46c7f3d59326120bb0ec2); /* statement */ 
revokeRole(MINTER_ROLE, minter);
    }

    function mint(address recipient, uint amount) public onlyRole(MINTER_ROLE){c_0x2dcb300b(0x8499be95f5d3d7743588db0bed627e01049c57bac9b1d6287c2b214eaf1125f9); /* function */ 


c_0x2dcb300b(0xc3246a476ee5d7bb5b1a04eb5272bb54e69eee80eb75742021a785e4ed8c3956); /* line */ 
        c_0x2dcb300b(0x519b80a8daa335c322d39e2a979400b6036297156490842a486a29ba4eeeafc0); /* statement */ 
totalSupply_ += amount;
c_0x2dcb300b(0x6890771b63906250f2cf8caaeb88b26823d2b42401ad825015fcf99c76211588); /* line */ 
        c_0x2dcb300b(0x9f2e07cdea70fcd8b7e7206ba8795fc0cd57f935f595051af4c1996cd0932f67); /* statement */ 
balances[recipient] += amount;

c_0x2dcb300b(0xebb8d590376aad02dca165e92b2b1c755ce30dba9051a968c679037c74100ce1); /* line */ 
        c_0x2dcb300b(0xead4fdb1121dbf890d689a63faf54396d947c6285fed06cb02efd1d315b78d51); /* statement */ 
emit Transfer(address(0), recipient, amount);
    }
}
