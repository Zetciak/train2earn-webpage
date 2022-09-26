// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './featuresStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import earn from '../../../public/features/earn.png';
import stayfit from '../../../public/features/stayfit.png';
import train from '../../../public/features/train.png';

// >> Variables
let features = [
	{
		icon: earn,
		title: 'Earn',
		desc: 'The T2E team will issue a utility token in Q4 that will be used to pay all the active app members that regularly complete the tasks.',
	},
	{
		icon: stayfit,
		title: 'Stay Fit',
		desc: 'Nearly 1 in 3 adults (30.7%) are overweight. More than 2 in 5 adults (42.4%) have obesity. Don’t expose yourself to diseases, and train with T2E!',
	},
	{
		icon: train,
		title: 'Train',
		desc: 'Do whatever you want. Move! Choose running, gym, or bike. Start losing fat today and explore blockchain opportunities!',
	},
];

// >> Script
function Features() {
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
						<Typography className={styles.featureTitle}>
							{element.title}
						</Typography>
						<Typography className={styles.featureDesc}>
							{element.desc}
						</Typography>
					</div>
				</div>
			);
		});
		setDawFeatures(drawFeaturesL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Features">
			<div className={styles.insideDiv}>
				<Typography className={styles.mainTitle} data-aos="fade-right">
					Our <span className={styles.textLines}>Features</span>
				</Typography>
				<div className={styles.featuresDiv} data-aos="zoom-in-up">
					{drawFeatures}
				</div>
			</div>
		</div>
	);
}

export default Features;
