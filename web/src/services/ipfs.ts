import { create } from "ipfs-http-client";
import { config } from "../config";
import { Buffer } from "buffer"
import Axios from "axios";

const client = create({
	url: config.infrura.url,
	headers: {
		authorization: 'Basic ' + Buffer.from(`${config.infrura.id}:${config.infrura.key}`).toString('base64'),
	}
})

export const addFile = async (url: string) => {
	const res = await Axios.get(url)
	const file = Buffer.from(res.data)
	const created = await client.add(file);
	const outputUrl = `https://ipfs.infura.io/ipfs/${created.path}`;
	return outputUrl
}
