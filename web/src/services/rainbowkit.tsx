
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultWallets,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrumGoerli, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import React from 'react';
import { config } from '../config';



const { chains, provider } = configureChains(
	[arbitrumGoerli],
	[
		alchemyProvider({ apiKey: config.alchemy.key }),
		publicProvider()
	]
);

const { connectors } = getDefaultWallets({
	appName: 'weather nft',
	chains
});

export const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider
})

export const Provider = ({ children }: React.PropsWithChildren) => {
	return (<>
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				{children}
			</RainbowKitProvider>
		</WagmiConfig>
	</>)
}