// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// >> Variables
const tokenAmount = 1000000;
const tokenInfo = {
	[1]: {
		title: 'Presale',
		percent: 25,
		desc: 'Sale Type: Fair Launch on Pinksale',
		color: '#fd728f',
	},
	[2]: {
		title: 'Liquidity',
		percent: 15,
		desc: 'Liquidity Pool locked for 365 days',
		color: '#049bff',
	},
	[3]: {
		title: 'P2E Rewards',
		percent: 30,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[4]: {
		title: 'CEX Listings',
		percent: 3,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[5]: {
		title: 'DEX Listings',
		percent: 3,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[6]: {
		title: 'Marketing',
		percent: 10,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[7]: {
		title: 'Team',
		percent: 3,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[8]: {
		title: 'Partnerships',
		percent: 4,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
	[9]: {
		title: 'Development',
		percent: 7,
		desc: 'Locked and Vested for 3 months',
		color: '#26c7d6',
	},
};

// >> Chart
ChartJS.register(ArcElement, Tooltip);
export const data = {
	labels: [
		tokenInfo[1].title,
		tokenInfo[2].title,
		tokenInfo[3].title,
		tokenInfo[4].title,
		tokenInfo[5].title,
		tokenInfo[6].title,
		tokenInfo[7].title,
		tokenInfo[8].title,
		tokenInfo[9].title,
	],
	datasets: [
		{
			data: [
				tokenInfo[1].percent,
				tokenInfo[2].percent,
				tokenInfo[3].percent,
				tokenInfo[4].percent,
				tokenInfo[5].percent,
				tokenInfo[6].percent,
				tokenInfo[7].percent,
				tokenInfo[8].percent,
				tokenInfo[9].percent,
			],
			backgroundColor: [
				tokenInfo[1].color,
				tokenInfo[2].color,
				tokenInfo[3].color,
				tokenInfo[4].color,
				tokenInfo[5].color,
				tokenInfo[6].color,
				tokenInfo[7].color,
				tokenInfo[8].color,
				tokenInfo[9].color,
			],
			borderColor: '#000000',
			borderWidth: 3,
			padding: 100,
			cutout: '70%',
			hoverOffset: 10,
		},
	],
};

// >> Styles
import useStyles from './tokenomicsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import bgImage1 from '../../../public/bgImage1.png';
import bgImage2 from '../../../public/bgImage2.png';

// >> Script
function Tokenomics() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Tokenomics">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div className={styles.bgImage1}>
						<Image
							src={bgImage1}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
							data-aos="fade-right"
						/>
					</div>
					<div className={styles.bgImage2}>
						<Image
							src={bgImage2}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
							data-aos="fade-left"
						/>
					</div>
				</div>
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					Our <span className={styles.textLines}>Tokenomics</span>
				</Typography>
				<div className={styles.tokenomicsDiv} data-aos="zoom-in-up">
					<div className={styles.tokenomicsCircle}>
						<Doughnut
							data={data}
							options={{
								plugins: {
									tooltip: {
										callbacks: {
											label: (item) =>
												`${item.label}: ${item.formattedValue}%`,
										},
									},
								},
							}}
						/>
						<div className={styles.tokenomicsTexts}>
							<Typography className={styles.tokenomicsTitle}>
								1 000 000
							</Typography>
							<Typography className={styles.tokenomicsDesc}>
								Total Supply
							</Typography>
						</div>
					</div>
					<div className={styles.tokenomicsBars}>
						{Object.values(tokenInfo).map((value, index) => {
							//console.log(value);
							return (
								<div
									className={styles.tokenomicsOneBar}
									key={index}
								>
									<div
										className={styles.tokenomicsLeftColor}
										style={{ background: value.color }}
									></div>
									<div className={styles.leftTexts}>
										<Typography
											className={styles.percentText}
											style={{ color: value.color }}
										>
											{value.percent}%
										</Typography>
										<Typography
											className={styles.percentTitle}
										>
											{value.title}
										</Typography>
										<Typography
											className={styles.percentDesc}
										>
											{value.desc}
										</Typography>
									</div>
									<div className={styles.rightTexts}>
										<Typography
											className={styles.rightNumber}
											style={{ color: value.color }}
										>
											{(
												tokenAmount *
												(value.percent / 100)
											).toLocaleString('fr')}
										</Typography>
										<Typography
											className={styles.rightDesc}
										>
											Tokens
										</Typography>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tokenomics;
