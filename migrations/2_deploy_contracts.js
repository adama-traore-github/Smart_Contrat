const JokerToken = artifacts.require("JokerToken");

module.exports = function (deployer) {
  // Déployer le contrat avec une supply initiale de 1 million de tokens
  deployer.deploy(JokerToken, web3.utils.toWei('1000000', 'ether'));
};
