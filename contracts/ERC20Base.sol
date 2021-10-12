// SPDX-License-Identifier: MIT
<<<<<<< HEAD
pragma solidity >=0.8.0 <0.9.0;
interface IERC20 {
=======

pragma solidity >=0.8.0 <0.9.0;
>>>>>>> b994856167a68ae4a7750a8a913420ffde08af62


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
    string public name = "ERC20Base";
    string public symbol = "ERC";
    uint8 public decimals = 18;

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;
    uint totalSupply_;

    constructor(uint total) {
        totalSupply_ = total;
        balances[msg.sender] = totalSupply_;
    }

    function totalSupply() external view override returns (uint) {
        return totalSupply_;
    }

    function balanceOf(address account) external view override returns (uint) {
        return balances[account];
    }

    function transfer(address recipient, uint amount) external override returns (bool) {
        require(amount <= balances[msg.sender]);

        balances[msg.sender] -= amount;
        balances[recipient] += amount;

        emit Transfer(msg.sender, recipient, amount);

        return true;
    }

    function approve(address spender, uint amount) external override returns (bool) {
        allowed[msg.sender][spender] = amount;

        emit Approval(msg.sender, spender, amount);

        return true;
    }

    function allowance(address owner, address spender) external view override returns (uint) {
        return allowed[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint amount) external override returns (bool) {
        require(amount <= balances[sender]);
        require(amount <= allowed[sender][msg.sender]);

        balances[sender] -= amount;
        allowed[sender][msg.sender] -= amount;
        balances[recipient] += amount;

        emit Transfer(sender, recipient, amount);
        
        return true;
    }
}
