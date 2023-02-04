import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ComponentType, PropsWithChildren } from "react"
import { useAccount } from "wagmi";
import { Loader } from "../components";
import { rainbowkit } from "../services";

const WalletWrapper = <T,>(props: PropsWithChildren<T>) => {
	const { isConnected, isConnecting, } = useAccount()

	return (
		<>
			<rainbowkit.Provider >
				<div className="d-flex justify-content-center">
					<ConnectButton accountStatus="address" chainStatus="icon" showBalance={true} />
				</div>
				{isConnecting && <Loader />}
				{isConnected && <>{props.children}</>}
			</rainbowkit.Provider>
		</>

	)
}
export default WalletWrapper
