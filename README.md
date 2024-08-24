
## Description

Ce projet utilise Truffle pour le développement de contrats intelligents Ethereum. Nous avons initialisé un projet Node.js et installé les dépendances nécessaires : `web3` pour interagir avec la blockchain Ethereum, `truffle` pour gérer le cycle de vie du développement des contrats intelligents, `ganache-cli` pour exécuter un réseau de développement local, et une version spécifique du compilateur Solidity avec `solc@0.8.19`. Nous avons également installé la bibliothèque OpenZeppelin (version 4.8.0) avec `npm install @openzeppelin/contracts@4.8.0`, qui fournit des contrats de base sécurisés pour nos propres contrats ERC20. Le contrat déployé commence avec une offre initiale de 1 000 000 de tokens, ce qui est configuré dans le script de migration pour le déploiement avec Truffle. Pour déployer le contrat, nous utilisons `truffle migrate --reset --network development`, ce qui réinitialise et déploie à nouveau tous les contrats, garantissant ainsi une instance propre à chaque déploiement.

## Instructions pour Tester

Pour tester les fonctionnalités du contrat, suivez ces étapes après avoir déployé le contrat :

1. **Obtenir l'instance du contrat** :
   ```javascript
   const instance = await JokerToken.deployed();
   ```

2. **Convertir et émettre 200 tokens** :
   ```javascript
   const mintAmount = web3.utils.toWei('200', 'ether');
   await instance.mint(mintAmount);
   ```

3. **Convertir et brûler 100 tokens** :
   ```javascript
   const burnAmount = web3.utils.toWei('100', 'ether');
   await instance.burn(burnAmount);
   ```

4. **Vérifier le total supply** :
   ```javascript
   const totalSupply = await instance.totalSupply();
   console.log(totalSupply.toString());
   ```

5. **Vérifier le solde du compte propriétaire** :
   ```javascript
   const balance = await instance.balanceOf(accounts[0]);
   console.log(balance.toString());
   ```

Les instructions ci-dessus permettent de vérifier que le contrat fonctionne correctement en émettant et en détruisant des tokens, ainsi qu'en vérifiant le total supply et les soldes des comptes.

## Déploiement et Utilisation

- **Configuration Environnementale** : Assure-toi que Ganache, Truffle, Solidity, et OpenZeppelin sont correctement installés et configurés.
- **Développement des Smart Contracts** : Les contrats ERC-20 sont créés et testés localement.