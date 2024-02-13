import { ethers } from "hardhat";

async function main() {
  
  const ToDoList = await ethers.deployContract("ToDoList");

  await ToDoList.waitForDeployment();

  console.log(
      'ToDoList contract deployed to ${ToDoList.target}'
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
