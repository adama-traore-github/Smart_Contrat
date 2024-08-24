// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JokerToken is ERC20 {
    // Constructeur du contrat
    constructor(uint256 initialSupply) ERC20("JokerToken", "JKT") {
        // Mint initialSupply tokens à l'adresse du déployeur
        _mint(msg.sender, initialSupply);
    }

    // Fonction pour émettre des tokens supplémentaires
    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }

    // Fonction pour détruire des tokens
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
