// >> Modules
import getVariable from '../../globalVariables';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './faqStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import bgRedLine4 from '../../../public/bgRedLine4.png';
import bgYellowLine4 from '../../../public/bgYellowLine4.png';
import bgImage3 from '../../../public/bgImage3.png';
import redEllipse5 from '../../../public/redEllipse5.png';
import yellowEllipse5 from '../../../public/yellowEllipse5.png';

// >> Variables
let overall = [
	{
		title: 'What is the $TRAIN token?',
		desc: '$TRAIN Token is a digital currency that motivates lazy folks to show up, train, lose fat and build muscles.',
	},
	{
		title: 'Has the Founder been doxxed?',
		desc: 'Yes. We conducted the KYC audit of all team members using … , to bring the credibility to another level.',
	},
	{
		title: 'Which chain will the Token be launched on?',
		desc: 'The $TRAIN token will be launched on the BNB Chain - the largest L1 blockchain after Ethereum build by the Binance Exchange.',
	},
	{
		title: 'How Can I Contact The Team?',
		desc: 'If you have any questions about the project, jump on the discord, tag the moderators, and they will answer your questions. You can also reach us via Twitter or Telegram.',
	},
	{
		title: 'How much can I earn?',
		desc: 'You can make up to $50 daily by doing daily exercises. Moreover, there are a bunch of bonuses for being a regular user (paid in $TRAIN).',
	},
	{
		title: 'What’s your background as a team?',
		desc: 'Privately, we are gym enthusiasts that get shredded every day. Also, we have been in the crypto space since 2018, so combining sport and blockchain is exciting for us.',
	},
];

// >> Script
function Faq() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const [drawOverall, setDrawOverall] = useState([]);

	useEffect(() => {
		let drawOverallL = [];
		overall.map((element, index) => {
			drawOverallL.push(
				<div key={index} className={styles.faqPointBefore}>
					<div className={styles.faqPoint}>
						<Typography className={styles.pointTitle}>
							{element.title}
						</Typography>
						<Typography className={styles.pointDesc}>
							{element.desc}
						</Typography>
					</div>
				</div>
			);
		});
		setDrawOverall(drawOverallL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="FAQ">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div className={styles.bgImage3}>
						<Image
							src={bgImage3}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.bgRedLine4}>
						<Image
							src={bgRedLine4}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.bgYellowLine4}>
						<Image
							src={bgYellowLine4}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.redEllipse5}>
						<Image
							src={redEllipse5}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>

					<div className={styles.yellowEllipse5}>
						<Image
							src={yellowEllipse5}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>

				<Typography className={styles.mainTitle} data-aos="fade-right">
					FAQ
				</Typography>
				<div className={styles.faqPoints} data-aos="fade-up">
					{drawOverall}
				</div>
			</div>
		</div>
	);
}

export default Faq;
