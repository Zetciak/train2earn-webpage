// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './landingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import landingImage from '../../../public/landingImage.png';
import yellowEllipse from '../../../public/yellowEllipse.png';
import redEllipse from '../../../public/redEllipse.png';

// >> Script
function Landing(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Home">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div
						className={styles.yellowEllipse}
						style={{
							transform: `
							translateY(${props.mouseY * 0.03}px)
							translateX(${props.mouseX * 0.08}px)
							`,
						}}
					>
						<Image
							src={yellowEllipse}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={styles.redEllipse}
						style={{
							transform: `
							translateY(${props.mouseY * 0.08}px)
							translateX(${props.mouseX * 0.03}px)
							`,
						}}
					>
						<Image
							src={redEllipse}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
				<div className={styles.leftSection} data-aos="fade-right">
					<Typography
						className={styles.mainTitle}
						data-aos="fade-right"
					>
						Train & Earn Crypto With Our{' '}
						<span className={styles.textLines}>Application</span>
					</Typography>
					<Typography
						className={styles.mainDesc}
						data-aos="fade-right"
					>
						Train2Earn is a mobile app that enables you to build
						muscles and make a first step in the blockchain
						industry, which is expected to grow to $16T in 2027.{' '}
						<b>You train. We pay.</b>
					</Typography>
					<div className={styles.buttonsDiv} data-aos="fade-right">
						<div className={styles.leftButtonDiv}>
							<Button
								variant="contained"
								className={styles.leftButton}
								href="https://google.com"
								target="_blank"
							>
								<Typography>Buy In Fair Launch</Typography>
							</Button>
						</div>
						<div className={styles.rightButtonDiv}>
							<Button
								variant="contained"
								className={styles.rightButton}
								href="https://google.com"
								target="_blank"
							>
								<Typography>Check More</Typography>
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.rightSection}>
					<Image
						src={landingImage}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
						data-aos="fade-left"
					/>
				</div>
			</div>
		</div>
	);
}

export default Landing;
