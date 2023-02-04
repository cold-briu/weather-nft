
import { ethers } from "ethers";
import { Minter as MinterAbi } from "../abi";
import { config } from "../config";
// const CONTRACT_ADDRESS = "DEPLOYED_RINKEBY_CONTRACT_ADDRESS";


export const mint = async (ipfsUrl: string) => {
	const { ethereum } = window;

	if (ethereum) {

		// TODO remove any
		const provider = new ethers.providers.Web3Provider(ethereum as any);
		const signer = provider.getSigner();
		const connectedContract = new ethers.Contract(config.alchemy.contractAddress, MinterAbi, signer);
		// TODO DYNAMIC TARGET ADDR
		const addr = "0x89616831662c6d1978dfD97203F8C9202C8a733C"
		console.log(addr, config.alchemy.contractAddress);

		let nftTxn = await connectedContract.mint(addr, ipfsUrl);

		await nftTxn.wait();

		console.log(`Mined, see transaction: https://arbitrum.etherscan.io/tx/${nftTxn.hash}`);
	}
}