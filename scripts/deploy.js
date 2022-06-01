
const hre = require("hardhat");

async function main() {

  const DegenMoodSwings = await hre.ethers.getContractFactory("DegenMoodSwings");
  const degenMoodSwings = await DegenMoodSwings.deploy("Hello, Hardhat!");

  await degenMoodSwings.deployed();

  console.log("Degen Mood Swings deployed to:", degenMoodSwings.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
