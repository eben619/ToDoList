This smart contract implements a basic to-do list on the Ethereum blockchain. It allows users to create,

 mark as done, and delete their own activities, ensuring a secure and transparent record of tasks.

Features:

    Create Activities: Add new tasks to your list with descriptions.
    Mark Activities as Done: Track your progress by marking completed tasks.
    Delete Activities: Remove tasks from your list when they're no longer relevant.
    Secure Ownership: Only the user who created an activity can modify it.
    Transparent Data: Activities and their completion status are stored on the blockchain for immutability.

Events:

    ActivityCreated(address indexed user, uint256 indexed activityIndex, string description): Emitted when a new activity is added.
    ActivityDeleted(address indexed user, uint256 indexed activityIndex): Emitted when an activity is deleted.
    ActivityMarkedAsDone(address indexed user, uint256 indexed activityIndex): Emitted when an activity is marked as done.

Requirements:

    Solidity compiler version ^0.8.0 (https://docs.soliditylang.org/en/v0.8.19/installing-solidity.html)
    A blockchain development environment (e.g., Remix, Truffle, Hardhat)

Deployment:

    Clone or download this repository.
    Connect your development environment to a blockchain network (e.g., local test network or public network like Ethereum).
    Deploy the ToDoList contract.
    Interact with the contract functions using your development environment's tools.

License:

MIT License
# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
