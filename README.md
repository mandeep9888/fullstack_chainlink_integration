# fullstack_chainlink_integration

Mandeep Singh

Student ID: 101495592

Project Setup Steps:

1. Backend Setup:

   - Navigate to the 'backend' folder.
   - Open the terminal in the 'backend' folder and execute the command `npm install`.

2. Configuration:

   - Modify the .env file, updating ALCHEMY_API_KEY and METAMASK_PRIVATE_KEY with your corresponding keys.

3. Smart Contract Compilation:

   - Run the command `npx hardhat compile` in the terminal to compile the smart contract.

4. Deployment:

   - Execute the command `npx hardhat run scripts/deploy.js --network sepolia` to deploy the contract on the sepolia network.

5. Update Frontend:

   - Copy the deployed contract address.
   - Paste the address in the 'frontend/src/app.js' file.

6. Frontend Setup:

   - Open the terminal in the 'frontend' folder.
   - Run `npm install` and after completion, execute npm start.
