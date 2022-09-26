// >> Modules
import getVariable from '../../globalVariables';
import { Link } from 'react-scroll';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

// >> Styles
import useStyles from './navBarStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import logo from '../../../public/logo.svg';
import metaMask from '../../../public/metaMask.png';
import walletConnect from '../../../public/walletConnect.png';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// >> Script
function NavBar(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [showWalletConnect, setShowWalletConnect] = useState(false);

	// >> Function
	function showGui(switchBtn) {
		if (switchBtn === 'button' && showWalletConnect === true) {
		} else {
			setShowWalletConnect(!showWalletConnect);
		}
	}

	function walletConnectFunction(type) {
		if (type === 'walletConnect') {
			props.walletConnectLogin();
		} else if (type === 'metaMask') {
			props.metaMaskLogin();
		} else if (type === 'disconnectWallet') {
			props.disconnectWallet();
		}
	}

	// >> Web3
	const slice = (address) => {
		const first = address.slice(0, 5);
		const second = address.slice(37, 42);
		return first + '....' + second;
	};

	// >> Render
	return (
		<>
			<div className={styles.outsideDiv} data-aos="fade-down">
				<div className={styles.insideDiv}>
					<div className={styles.leftSection} data-aos="fade-right">
						<Image
							src={logo}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.centerSection}>
						<Link to="Features" className={styles.oneCenterElement}>
							<Typography>Features</Typography>
						</Link>
						<Link to="Earn" className={styles.oneCenterElement}>
							<Typography>How To Earn</Typography>
						</Link>
						<Link
							to="Tokenomics"
							className={styles.oneCenterElement}
						>
							<Typography>Tokenomics</Typography>
						</Link>
						<Link to="Roadmap" className={styles.oneCenterElement}>
							<Typography>Roadmap</Typography>
						</Link>
						<Link to="App" className={styles.oneCenterElement}>
							<Typography>Our App</Typography>
						</Link>
						<Link to="FAQ" className={styles.oneCenterElement}>
							<Typography>FAQ</Typography>
						</Link>
					</div>
					<div className={styles.rightSection} data-aos="fade-left">
						<Button
							variant="contained"
							className={styles.button}
							onClick={() => {
								showGui('button');
							}}
						>
							<Typography>
								{!props.user
									? 'Connect Wallet'
									: slice(props.user)}
							</Typography>
						</Button>
					</div>
				</div>
			</div>
			<div
				className={styles.walletConnect}
				style={
					showWalletConnect === true
						? { opacity: '1' }
						: { opacity: '0', pointerEvents: 'none' }
				}
			>
				<div className={styles.walletConnectInside}>
					<Typography className={styles.walletConnectTitle}>
						{!props.user ? 'Connect Wallet' : 'Disconnect Wallet'}
					</Typography>
					<Typography className={styles.walletConnectDesc}>
						{!props.user
							? 'Choose wallet which you want to connect'
							: slice(props.user)}
					</Typography>
					<div hidden={props.user ? true : false}>
						<div className={styles.straightLine}></div>
						<div
							className={styles.oneWallet}
							onClick={() => {
								walletConnectFunction('metaMask');
							}}
						>
							<div className={styles.oneWalletInside}>
								<div className={styles.iconLogo}>
									<Image
										src={metaMask}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</div>
								<Typography className={styles.walletName}>
									Metamask
								</Typography>
							</div>
						</div>
						<div className={styles.straightLine}></div>
						<div
							className={styles.oneWallet}
							onClick={() => {
								walletConnectFunction('walletConnect');
							}}
						>
							<div className={styles.oneWalletInside}>
								<div className={styles.iconLogo}>
									<Image
										src={walletConnect}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</div>
								<Typography className={styles.walletName}>
									WalletConnect
								</Typography>
							</div>
						</div>
					</div>
					<div hidden={!props.user ? true : false}>
						<div className={styles.straightLine}></div>
						<div
							className={styles.oneWallet}
							onClick={() => {
								walletConnectFunction('disconnectWallet');
							}}
						>
							<div className={styles.oneWalletInside}>
								<Typography className={styles.walletName}>
									Disconnect
								</Typography>
							</div>
						</div>
					</div>
					<div className={styles.straightLine}></div>
					<div className={styles.bottomButtonDiv}>
						<Button
							variant="contained"
							className={styles.bottomButton}
							onClick={() => {
								showGui('bottomButton');
							}}
						>
							<CloseRoundedIcon
								className={styles.bottomButtonIcon}
							/>
							<Typography>Close</Typography>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
