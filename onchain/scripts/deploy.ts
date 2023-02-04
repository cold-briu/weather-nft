import { ethers } from "hardhat";
async function main() {

  const contract = await ethers.getContractFactory("Minter")
  const token = contract.deploy("Weather", "WET")
  await (await token).deployed()
  console.log("deployed to:", (await token).address);

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
