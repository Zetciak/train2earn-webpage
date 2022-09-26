import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

let web3l;

var provider = new WalletConnectProvider({
	rpc: {
		56: 'https://bsc-dataseed1.ninicoin.io',
		97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
		// ...
	},
	bridge: 'https://bridge.walletconnect.org',
});

export const WalletConnect = async () => {
	try {
		await provider.enable();
		await provider.disconnect();
		web3l = new Web3(provider);
	} catch (error) {
		console.log(error);
	}
};

export const DissconnectWallet = async () => {
	//await provider.disconnect();
	web3l = null;
};

export const MetaMasklogin = async () => {
	// await provider.disconnect();
	const data = await window.ethereum.enable();
	web3l = new Web3(window.ethereum);
	return data[0];
};

export const getUserAddress = async () => {
	try {
		const address = await web3l.eth.getAccounts();
		return address[0];
	} catch (error) {
		console.log(error);
	}
};

export const GetChainId = async () => {
	if (web3l) {
		const id = await web3l.eth.getChainId();
		return id;
	}
	return false;
};
