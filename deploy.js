const ethers = require("ethers");
const fs = require("fs");

const main = async () => {
// rpc request HTTP://127.0.0.1:8545
 const provider = new ethers.providers.JsonRpcBatchProvider("http://127.0.0.1:8545");
 const wallet = new ethers.Wallet("974571d3865d1cced730eb43cee2e639c75d430ebf3a2728e03b1dc45d210393", 
 provider)
 const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
 const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
 const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
 console.log("Deploying.... Please wait....");
 const contract = await contractFactory.deploy();
 console.log(contract);
 const deploymentReceipt = await contract.deployTransaction.wait(1);
 console.log(deploymentReceipt);

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });