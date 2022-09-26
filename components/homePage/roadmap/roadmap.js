// >> Modules
import getVariable from '../../globalVariables';
import { Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize.js';

// >> Styles
import useStyles from './roadmapStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import redEllipse3 from '../../../public/redEllipse3.png';
import yellowEllipse3 from '../../../public/yellowEllipse3.png';
import roadmap from '../../../public/icons/roadmap.svg';
import roadmapArrows from '../../../public/roadmapArrows.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyleSharp } from '@mui/icons-material';

// >> Variables
let roadmapPhase1 = [
	{
		text: 'Launching the social media channels',
		done: true,
	},
	{
		text: 'Developing the Train2Earn Landing Page',
		done: true,
	},
	{
		text: 'Starting first community-engagement activities',
		done: true,
	},
	{
		text: 'Preparing the Train2Earn UX&UI',
		done: true,
	},
	{
		text: 'Building the smart contracts',
		done: true,
	},
	{
		text: 'Conducting the base implementation of backend',
		done: true,
	},
	{
		text: 'Finalizing the presale',
		done: true,
	},
];

let roadmapPhase2 = [
	{
		text: 'Establishing dev-oriented cooperations',
		done: false,
	},
	{
		text: 'Preparing an MVP version',
		done: false,
	},
	{
		text: 'Implementing the rarity systems of in-app objects',
		done: false,
	},
	{
		text: 'Deploying & testing platform on testnet',
		done: false,
	},
	{
		text: 'Conducting the smart contract audits',
		done: false,
	},
	{
		text: 'Incubating the first runners & bikers',
		done: false,
	},
];

let roadmapPhase3 = [
	{
		text: 'Preparing an official launch of the Marketplace',
		done: false,
	},
	{
		text: 'Implementing the real-time communication between backend and frontend',
		done: false,
	},
	{
		text: 'Integrating frontend with the backend API',
		done: false,
	},
	{
		text: 'Preparing community contests & community calls',
		done: false,
	},
	{
		text: 'Implementing a notification and activity system',
		done: false,
	},
	{
		text: 'Establishing first partnerships with gym influencers',
		done: false,
	},
	{
		text: 'Conducting the first buy-back of TRAIN',
		done: false,
	},
];

// >> Script
function Roadmap() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const size = useWindowSize();

	// >> Functions
	const [drawPhase1, setDrawPhase1] = useState([]);
	const [drawPhase2, setDrawPhase2] = useState([]);
	const [drawPhase3, setDrawPhase3] = useState([]);

	useEffect(() => {
		let localPhase1 = [];
		roadmapPhase1.map((element, index) => {
			localPhase1.push(
				<div className={styles.roadmapPoint} key={index}>
					<Typography className={styles.roadmapPointTitle}>
						{element.text}
					</Typography>
					{element.done === true ? (
						<div className={styles.roadmapImage}>
							<Image
								src={roadmap}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
				</div>
			);
		});
		setDrawPhase1(localPhase1);

		let localPhase2 = [];
		roadmapPhase2.map((element, index) => {
			localPhase2.push(
				<div className={styles.roadmapPoint} key={index}>
					<Typography className={styles.roadmapPointTitle}>
						{element.text}
					</Typography>
					{element.done === true ? (
						<div className={styles.roadmapImage}>
							<Image
								src={roadmap}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
				</div>
			);
		});
		setDrawPhase2(localPhase2);

		let localPhase3 = [];
		roadmapPhase3.map((element, index) => {
			localPhase3.push(
				<div className={styles.roadmapPoint} key={index}>
					<Typography className={styles.roadmapPointTitle}>
						{element.text}
					</Typography>
					{element.done === true ? (
						<div className={styles.roadmapImage}>
							<Image
								src={roadmap}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
				</div>
			);
		});
		setDrawPhase3(localPhase3);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Roadmap">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div className={styles.redEllipse3}>
						<Image
							src={redEllipse3}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.yellowEllipse3}>
						<Image
							src={yellowEllipse3}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.roadmapArrows} data-aos="zoom-in-up">
						<Image
							src={roadmapArrows}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					Our <span className={styles.textLines}>Roadmap</span>
				</Typography>
				<div className={styles.roadmapDiv} data-aos="zoom-in-up">
					<div
						className={`${styles.roadmapOne} ${styles.firstRoadmap}`}
					>
						<div className={styles.roadmapCircle}>
							<Typography>Q1</Typography>
						</div>
						<Typography className={styles.roadmapTitle}>
							Start Of The Project
						</Typography>
						<div className={styles.roadmapPoints}>{drawPhase1}</div>
					</div>
					<div
						className={`${styles.roadmapOne} ${styles.secondRoadmap}`}
					>
						<div className={styles.roadmapCircle}>
							<Typography>Q2</Typography>
						</div>
						<Typography className={styles.roadmapTitle}>
							Improving Project
						</Typography>
						<div className={styles.roadmapPoints}>{drawPhase2}</div>
					</div>
					<div
						className={`${styles.roadmapOne} ${styles.thirdRoadmap}`}
					>
						<div className={styles.roadmapCircle}>
							<Typography>Q3</Typography>
						</div>
						<Typography className={styles.roadmapTitle}>
							Next Step
						</Typography>
						<div className={styles.roadmapPoints}>{drawPhase3}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
