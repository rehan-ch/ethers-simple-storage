const ethers = require("ethers");
const fs = require("fs");

const main = async () => {
// rpc request HTTP://127.0.0.1:8545
 const provider = new ethers.providers.JsonRpcBatchProvider("http://127.0.0.1:7545");
 const wallet = new ethers.Wallet("60b5075ca116b751b5b92245c52a500abe087643939efd4f76f1fbbbcc9e1d00", 
 provider)
 const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
 const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
 const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
 console.log("Deploying.... Please wait....");
//  deploy contract
 const contract = await contractFactory.deploy();
//  get receipt when atleast 1 node confirm it
 const deploymentReceipt = await contract.deployTransaction.wait(1);
 console.log(contract.deployTransaction)



}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });