// Importation de l'artefact du contrat JokerToken
const JokerToken = artifacts.require("JokerToken");

contract("JokerToken", (accounts) => {
  let token; // Variable pour stocker l'instance du contrat
  const initialSupply = web3.utils.toWei('1000000', 'ether'); // Définition de l'approvisionnement initial en tokens (1 million)
  const [owner] = accounts; // Récupère le premier compte (owner) des comptes disponibles

  // Cette fonction est exécutée avant chaque test pour déployer une nouvelle instance du contrat
  beforeEach(async () => {
    token = await JokerToken.new(initialSupply); // Déploie une nouvelle instance du contrat avec l'approvisionnement initial
  });

  // Test pour vérifier que le contrat est déployé avec l'approvisionnement initial correct
  it("should deploy the contract with the correct initial supply", async () => {
    const balance = await token.balanceOf(owner); // Récupère le solde de l'owner
    assert.equal(balance.toString(), initialSupply, "Initial supply should be assigned to the owner"); // Vérifie que le solde est égal à l'approvisionnement initial
  });

  // Test pour vérifier la fonctionnalité d'émission de nouveaux tokens
  it("should mint new tokens", async () => {
    const mintAmount = web3.utils.toWei('5000', 'ether'); // Définition de la quantité de tokens à émettre (5000)
    await token.mint(mintAmount); // Appelle la fonction mint pour émettre des tokens
    const balance = await token.balanceOf(owner); // Récupère le solde de l'owner après l'émission
    assert.equal(balance.toString(), web3.utils.toWei('1005000', 'ether'), "Token balance should be updated after minting"); // Vérifie que le solde est mis à jour correctement après l'émission
  });

  // Test pour vérifier la fonctionnalité de destruction de tokens
  it("should burn tokens", async () => {
    const burnAmount = web3.utils.toWei('5000', 'ether'); // Définition de la quantité de tokens à détruire (5000)
    await token.burn(burnAmount); // Appelle la fonction burn pour détruire des tokens
    const balance = await token.balanceOf(owner); // Récupère le solde de l'owner après la destruction
    assert.equal(balance.toString(), web3.utils.toWei('995000', 'ether'), "Token balance should be updated after burning"); // Vérifie que le solde est mis à jour correctement après la destruction
  });
});
