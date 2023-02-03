
import { ethers } from "ethers";
import { LockAbi } from "../abi";
// const CONTRACT_ADDRESS = "DEPLOYED_RINKEBY_CONTRACT_ADDRESS";
const CONTRACT_ADDRESS = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

export const mint = async (ipfsUrl: string) => {
	const { ethereum } = window;

	if (ethereum) {

		// TODO remove any
		const provider = new ethers.providers.Web3Provider(ethereum as any);
		const signer = provider.getSigner();
		const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, LockAbi, signer);

		//Calling the actual function to mint NFT.
		console.log("Going to pop wallet now to pay gas...")
		let nftTxn = await connectedContract.mintWeatherNft();

		//Waiting for transaction to complete.
		console.log("Mining...please wait.")
		await nftTxn.wait();

		console.log(`Mined, see transaction: https://arbitrum.etherscan.io/tx/${nftTxn.hash}`);
	}
}