// >> Modules
import getVariable from '../../globalVariables';
import { Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './footerStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import logo from '../../../public/logo.svg';
import twitter from '../../../public/icons/twitterWhite.svg';
import discord from '../../../public/icons/discordWhite.svg';
import telegram from '../../../public/icons/telegramWhite.svg';

// >> Script
function Footer() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.logoDiv}>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.lineDiv}></div>
				<div className={styles.navElements}>
					<Link to="Features" className={styles.oneRightLink}>
						<Typography>Features</Typography>
					</Link>
					<Link to="Earn" className={styles.oneRightLink}>
						<Typography>How To Earn</Typography>
					</Link>
					<Link to="Tokenomics" className={styles.oneRightLink}>
						<Typography>Tokenomics</Typography>
					</Link>
					<Link to="Roadmap" className={styles.oneRightLink}>
						<Typography>Roadmap</Typography>
					</Link>
					<Link to="App" className={styles.oneRightLink}>
						<Typography>Our App</Typography>
					</Link>
					<Link to="FAQ" className={styles.oneRightLink}>
						<Typography>FAQ</Typography>
					</Link>
				</div>
				<div className={styles.lineDiv}></div>
				<div className={styles.bottomRight}>
					<IconButton
						variant="contained"
						className={styles.bottomRightButton}
						href="https://twitter.com/Train2EarnDeFi"
						target="_blank"
					>
						<div className={styles.bottomRightButtonImage}>
							<Image
								src={twitter}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</IconButton>
					<IconButton
						variant="contained"
						className={styles.bottomRightButton}
						href="https://t.me/Train2EarnDeFi"
						target="_blank"
					>
						<div className={styles.bottomRightButtonImage}>
							<Image
								src={telegram}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Footer;
