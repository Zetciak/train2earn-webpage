// >> Modules
import getVariable from '../../globalVariables';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './appStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import phone2 from '../../../public/phone2.png';
import redEllipse4 from '../../../public/redEllipse4.png';
import yellowEllipse4 from '../../../public/yellowEllipse4.png';
import earn from '../../../public/features/earn.png';
import stayfit from '../../../public/features/stayfit.png';
import train from '../../../public/features/train.png';

// >> Variables
let features = [
	{
		icon: earn,
		title: 'Earn',
		desc: 'We reward active sports enthusiasts with 40% of the total $TRAIN supply.',
	},
	{
		icon: stayfit,
		title: 'Stay Fit',
		desc: 'Stay strong. Be healthy. Avoid diseases. Feel good. All of that with T2E.',
	},
	{
		icon: train,
		title: 'Train',
		desc: 'Build muscles and flex in front of your friends!',
	},
];

// >> Script
function App() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const [drawFeatures, setDawFeatures] = useState([]);

	useEffect(() => {
		let drawFeaturesL = [];
		features.map((element, index) => {
			drawFeaturesL.push(
				<div key={index} className={styles.oneFeatureBefore}>
					<div className={styles.oneFeature}>
						<div className={styles.featureIcon}>
							<Image
								src={element.icon}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<div className={styles.featureTexts}>
							<Typography className={styles.featureTitle}>
								{element.title}
							</Typography>
							<Typography className={styles.featureDesc}>
								{element.desc}
							</Typography>
						</div>
					</div>
				</div>
			);
		});
		setDawFeatures(drawFeaturesL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="App">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div className={styles.redEllipse4}>
						<Image
							src={redEllipse4}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.yellowEllipse4}>
						<Image
							src={yellowEllipse4}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>

				<div className={styles.leftSection} data-aos="fade-right">
					<Typography className={styles.mainTitle}>
						<span className={styles.textLines}>Download</span> App
					</Typography>
					<Typography className={styles.mainDesc}>
						Download the app that helps you explore the world of the
						gym and the world of crypto.
					</Typography>
					<div className={styles.buttonsDiv}>
						<div className={styles.googlePlayButtonDiv}>
							<Button
								variant="contained"
								className={styles.googlePlayButton}
								href="."
							></Button>
						</div>

						<div className={styles.appStoreButtonDiv}>
							<Button
								variant="contained"
								className={styles.appStoreButton}
								href="."
							></Button>
						</div>
					</div>
				</div>
				<div className={styles.centerSection}>
					<Image
						src={phone2}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
						data-aos="zoom-in-up"
					/>
				</div>
				<div className={styles.rightSection} data-aos="fade-left">
					{drawFeatures}
				</div>
			</div>
		</div>
	);
}

export default App;
