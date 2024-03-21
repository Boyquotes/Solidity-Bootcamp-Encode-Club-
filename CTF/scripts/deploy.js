// Le module 'hardhat' est importé, ce qui vous permet d'interagir avec les fonctionnalités de Hardhat.
const hre = require("hardhat");

async function main() {
 const level0 = await hre.ethers.deployContract("Level0Template");
 // Cette ligne attend que le déploiement du contrat soit terminé. Cela garantit que vous ne continuez pas tant que le contrat n'est pas déployé.
 await level0.waitForDeployment();
 // Une fois le contrat déployé, cette ligne imprime dans la console l'adresse du contrat déployé.
 console.log(
 `level0 deployed to ${level0.target}`
 );
}

// Vous appelez la fonction 'main' pour exécuter le déploiement du contrat. 
// Si une erreur se produit, elle est capturée et affichée dans la console.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

