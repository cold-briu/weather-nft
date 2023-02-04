import { Chain, ConnectButton } from "@rainbow-me/rainbowkit"
import { ComponentType, PropsWithChildren } from "react"
import { useAccount } from "wagmi";
import { Loader } from "../components";
import { rainbowkit } from "../services";



const withWallet = <T,>(Child: ComponentType<T>) => (props: PropsWithChildren<T>) => {
	const { isConnected, isConnecting, } = useAccount()

	return (
		<>
			<rainbowkit.Provider >
				<ConnectButton accountStatus="address" chainStatus="icon" showBalance={true} />
				{isConnecting && <Loader />}
				{isConnected && <Child {...props} />}
			</rainbowkit.Provider>
		</>

	)
}
export default withWallet
