import { ethers } from 'hardhat';

async function main() {
  
  const ToDoList = await ethers.getContractFactory('ToDoList');

 
  console.log('Deploying ToDoList...');
  const todoList = await ToDoList.deploy();

  
  await todoList.deployed();

  console.log('ToDoList deployed to:', todoList.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


