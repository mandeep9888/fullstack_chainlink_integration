async function main() {
  try {
    const contractFactory = await ethers.getContractFactory("DataConsumerV3");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    console.log("Contract address >>>>>>>   ", contract.address);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
