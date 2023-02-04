
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
		const addr = await signer.getAddress()

		let nftTxn = await connectedContract.mint(addr, ipfsUrl);

		await nftTxn.wait();

		return `https://goerli.arbiscan.io/tx/${nftTxn.hash}`
	}
}