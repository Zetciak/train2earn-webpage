// >> Modules
import Head from 'next/head';
import getVariable from '../globalVariables';
import { useEffect, useState } from 'react';

// >> Web3
import {
	getUserAddress,
	MetaMasklogin,
	WalletConnect,
	GetChainId,
	DissconnectWallet,
} from '../../web3/SelectWallet';

// >> Styles
import useStyles from './homePageStyle';
import useGlobalStyles from '../globalStyle';

// >> Components
import NavBar from './navBar/navBar';
import Landing from './landing/landing';
import Partners from './partners/partners';
import Features from './features/features';
import Earn from './earn/earn';
import Tokenomics from './tokenomics/tokenomics';
import Roadmap from './roadmap/roadmap';
import App from './app/app';
import SocialMedia from './socialMedia/socialMedia';
import Faq from './faq/faq';
import Footer from './footer/footer';

// >> Script
function HomePage() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Parallax
	const [offsetY, setOffsetY] = useState(0);
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	const handleMove = (e) => {
		setMouseX(e.pageX);
		setMouseY(e.pageY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMove);
		};
	}, []);

	// >> Web3
	const [account, setAccount] = useState('');
	const [userG, setUser] = useState();

	useEffect(() => {
		const init = async () => {
			const wallet = window.localStorage.getItem('wallet');
			if (wallet) {
				await metaMaskLogin();
			}
			const id = await GetChainId();
			if (id) {
				if (Number(id) !== 5) {
					console.log(id);
					await window.ethereum.request({
						method: 'wallet_switchEthereumChain',
						params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
					});
				}
			}
		};

		init();
	}, []);

	try {
		window.ethereum.on('accountsChanged', function (accounts) {
			setAccount(accounts[0]);
			setUser(accounts[0]);
		});
	} catch (error) {}

	try {
		window.ethereum.on('chainChanged', function (accounts) {
			window.location.reload();
		});
	} catch (error) {}

	const metaMaskLogin = async () => {
		await MetaMasklogin();
		const user = await getUserAddress();
		window.user = user;
		setUser(user);
		window.localStorage.setItem('wallet', 'metamask');
	};

	const walletConnectLogin = async () => {
		await WalletConnect();
		const user = await getUserAddress();
		window.user = user;
		setUser(user);
	};

	const disconnectWallet = async () => {
		if (!user) {
			return true;
		}
		await DissconnectWallet();
		setUser(undefined);
		window.user = undefined;
		window.localStorage.removeItem('wallet');
	};

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="keywords"
					content={getVariable['texts']['pageTags']}
				/>
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<div className={styles.mainDiv}>
				<div className={styles.componentsDiv}>
					<NavBar
						user={userG}
						walletConnectLogin={walletConnectLogin}
						metaMaskLogin={metaMaskLogin}
						disconnectWallet={disconnectWallet}
					/>
					<Landing
						offsetY={offsetY}
						mouseX={mouseX}
						mouseY={mouseY}
					/>
					<Partners />
					<Features />
					<Earn />
					<Tokenomics />
					<Roadmap />
					<App />
					<SocialMedia />
					<Faq />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default HomePage;
