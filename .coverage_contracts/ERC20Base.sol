// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
function c_0xfd666343(bytes32 c__0xfd666343) pure {}

interface IERC20 {

    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

contract ERC20Base is IERC20 {
function c_0x780968d2(bytes32 c__0x780968d2) public pure {}

    string public name = "ERC20Base";
    string public symbol = "ERC";
    uint8 public decimals = 18;

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;
    uint totalSupply_;

    constructor(uint total) {c_0x780968d2(0x8f9fc08b238a7c77ab2fd3bfdf49f0f72d25f27866c60adea3fed3a9c71c5dc8); /* function */ 

c_0x780968d2(0x96b07432d7250b4840dafb71eaf466ae67b6e321bb6977fb938f329d95122f28); /* line */ 
        c_0x780968d2(0xa6f2f99f8d87bd19d56d8ef88a8207687476d605e8bf8effa13d82300cf87cc9); /* statement */ 
totalSupply_ = total;
c_0x780968d2(0xb0bc39ba7f55f518479912d033bc871fe723b2cbb50a5f4a5c2a6cfc639341d9); /* line */ 
        c_0x780968d2(0xf4df04d1230470dd4bdff602b87035bbe16d9cc452c4a4c77adf35c6b7f46327); /* statement */ 
balances[msg.sender] = totalSupply_;
    }

    function totalSupply() external view override returns (uint) {c_0x780968d2(0x19e12c4ad6f7d4fd11efa94ebba5c033b45767ddc830d19da780dace95a06ba2); /* function */ 

c_0x780968d2(0x2d7c99dfa139c58fe532e4c5f106025cc0d38a8f27598cfcb042f419f892c724); /* line */ 
        c_0x780968d2(0xbfb4018af2acf88ccce4245f7653e4c175cbe930f195c242b270554ef02ac73b); /* statement */ 
return totalSupply_;
    }

    function balanceOf(address account) external view override returns (uint) {c_0x780968d2(0x5276ce71ab631c3bf40da9f341fb67860644a9d3d2030f60bc88c4ef5319bbd3); /* function */ 

c_0x780968d2(0x2654494b615ae73f7a66221fd18cd38139c7e97f4038c817aabd27fc0e5f2a40); /* line */ 
        c_0x780968d2(0x5384212f228ce29cc809b6a1c657d3bd7758e5423a78bdeec032c04317b79819); /* statement */ 
return balances[account];
    }

    function transfer(address recipient, uint amount) external override returns (bool) {c_0x780968d2(0x6eacf5b63e7dc07a911c568d2e66d29a23cabf20361305ca97691ea8e9d5f2f9); /* function */ 

c_0x780968d2(0xa9748d339a85e97dbd0ae3c4488d833a9fd9d91ec15b8806544414c7f8ec467d); /* line */ 
        c_0x780968d2(0xcb32a5fbe4953960ca8bc7fec85501711b3ad11a8264ef770a0d7e75f24cf33a); /* requirePre */ 
c_0x780968d2(0x326f9937501e53045861f17612a3a705172030faf61ee54871987ab82cab700c); /* statement */ 
require(amount <= balances[msg.sender]);c_0x780968d2(0x7b162f6367396b85303ca7490c764f17c9af85b6e1073ea00f4142ac1d65749a); /* requirePost */ 


c_0x780968d2(0x55fced66988bc80db2fdc460185e8d9b3f84741f9ea03a541a72df181d8a7e10); /* line */ 
        c_0x780968d2(0xd8572ec7243ad1435f69408df2f2e3c4b789c16bb432b84eba4d7fde69cec550); /* statement */ 
balances[msg.sender] -=amount;
c_0x780968d2(0x885ff079b98501010af4b2d9472a748cc924d7eccb2829dd02a0c22375824e48); /* line */ 
        c_0x780968d2(0x0b72ae440a0ce067d97e9701aa2b23f13e021bbc6c07522d906e86699ae71b6a); /* statement */ 
balances[recipient] +=amount;

c_0x780968d2(0xf9103691b27f13fba0d0ca73cf49f186bbc44de857a4457bc11906f0032d90a4); /* line */ 
        c_0x780968d2(0x4d5ae6378d34f1be4ab2714227ec34045ab2ef251efac0d0444886f062bb4046); /* statement */ 
emit Transfer(msg.sender, recipient, amount);

c_0x780968d2(0x434263520888c79fe48c498568e59807a15386add768a1c083b35bbac235dd8a); /* line */ 
        c_0x780968d2(0x9e705421c332386dd4a0dff20a091c51ec0c3e92636a98ac277ceb6a65e6bd23); /* statement */ 
return true;
    }

    function approve(address spender, uint amount) external override returns (bool) {c_0x780968d2(0xb61f797bac538ebe48c3b463c140de5faf067ca90752b40b3e0c055e25ad99e0); /* function */ 

c_0x780968d2(0xbc97bc03863dbf2f3d018adc6a4df6749a935f663a2d9b6964894099cfd40bd8); /* line */ 
        c_0x780968d2(0x36644fbe90802c31865479b09de45859ba8362ad188a973dec0e5934329effea); /* statement */ 
allowed[msg.sender][spender] = amount;

c_0x780968d2(0xfee284aaeaede3b81d7ee912c637762dd088d93f66591a4f2e532f30866d5e74); /* line */ 
        c_0x780968d2(0x7ce9cf4effc8976d25ec49a9ee3061cae9cb64e4c71225c1d47e76e127681821); /* statement */ 
emit Approval(msg.sender, spender, amount);

c_0x780968d2(0x939b77b2924689ca865f004abaab9f2ea0295014553bfe65bd8c2ddac0068f59); /* line */ 
        c_0x780968d2(0x28593498b70c6771ee9facb00e5172857b08d6dc5cbea9ff6c2a56dbfdda4f9e); /* statement */ 
return true;
    }

    function allowance(address owner, address spender) external view override returns (uint) {c_0x780968d2(0x0bf288a046fe9b84dfdf73c06d88ea32ba9bd0d47dca9d2dff4895452b6c4de0); /* function */ 

c_0x780968d2(0x31b9be0f82d66bdc2bd8324e0e569eecacfe362aee51733f2365b2f8155a18ea); /* line */ 
        c_0x780968d2(0x6ea333fdae5653102852b118abdf5fdb1e194d1ec50e3cf4ff85561948517707); /* statement */ 
return allowed[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint amount) external override returns (bool) {c_0x780968d2(0x1a44ef12887e5ac22a4fed098c538c26c32bcab05b45b972c68af3f22e6af35a); /* function */ 

c_0x780968d2(0x176b73263032d470c049b259225cf2e047d2ada61750a22f9e2ac4b83749d4e2); /* line */ 
        c_0x780968d2(0x0c5c1be4125148d71e20df2278b506a120141041c7599974a4e7800779d11cc6); /* requirePre */ 
c_0x780968d2(0x3722597194aa11d96e3f6350b386c224b1493ab5e757ea3380bad0307ebb8340); /* statement */ 
require(amount <= balances[sender]);c_0x780968d2(0xe442d4e2a326db588cc783cd284aa7942163d29b8c3f6e60b6b6f6931662ae0f); /* requirePost */ 

c_0x780968d2(0xd9221293374610feb9a6cb39b797fe01eb6f0930a9c9acc36c97f494d6977e7b); /* line */ 
        c_0x780968d2(0x519129196c7feae3014658540d5a2fdc993fa5bc186168d2de7f322830611d56); /* requirePre */ 
c_0x780968d2(0xf4cc713a0e0a33c6279424cf758118dc0780516d6df1fdae544c4aeabefe5f4e); /* statement */ 
require(amount <= allowed[sender][msg.sender]);c_0x780968d2(0x3b0aa7db10d828cdbb71b9dc7f5c9f2117730d52b882f11fc37a96f935ab694c); /* requirePost */ 


c_0x780968d2(0x1e00bc6719ccf7a7c6ec7339a3137632ee1ec35eeb89e6a6df169519d53007b1); /* line */ 
        c_0x780968d2(0x7edc768af22b2ff95b6189388430675d75109f19f23ca58741d8977b0c419c8a); /* statement */ 
balances[sender] -=amount;
c_0x780968d2(0xb73b5d64f2c971845ae85afe7c5e96385860d761a7891537fbaca2254e4d1556); /* line */ 
        c_0x780968d2(0xd7276cfa27d80127d6688c60bd949b6b0aa09e313d4453e42f9006588b9b1511); /* statement */ 
allowed[sender][msg.sender] -=amount;
c_0x780968d2(0xe84f26a8f2cfefd38259eadf63e7a8508b4d27ab6e61ac6c7ac346d164be1411); /* line */ 
        c_0x780968d2(0xf32b0b27075332dae17dc0bb52b53b4aa259a4939e5d0ff08ca8044612717383); /* statement */ 
balances[recipient] +=amount;

c_0x780968d2(0xa89dbc8eb6593e30596f537683ecd0d424dbd8bce8b12f79ba341d6a39335e2f); /* line */ 
        c_0x780968d2(0xf444482d05c6b2eac926e9acd0da6a09bee58fa15382e430d85c1b3102dbe81c); /* statement */ 
emit Transfer(sender, recipient, amount);
c_0x780968d2(0x38a835dbdfbdfacb9918d468d175fa94b25e5da6d567c8fd2000e875b959d3f8); /* line */ 
        c_0x780968d2(0x55354f268bc920afe41c7e4709b8fc04556feb06dc36a8773afb6c3f07ef96e2); /* statement */ 
return true;
    }
}
