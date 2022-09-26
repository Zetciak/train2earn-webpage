// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './earnStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import phone1 from '../../../public/phone1.png';
import phone2 from '../../../public/phone2.png';
import phone3 from '../../../public/phone3.png';
import redEllipse2 from '../../../public/redEllipse2.png';
import yellowEllipse2 from '../../../public/yellowEllipse2.png';

// >> Script
function Earn() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Earn">
			<div className={styles.insideDiv}>
				<div className={styles.backgroundElements}>
					<div className={styles.yellowEllipse}>
						<Image
							src={yellowEllipse2}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.redEllipse}>
						<Image
							src={redEllipse2}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
				<Typography className={styles.mainTitle} data-aos="fade-up">
					How To <span className={styles.textLines}>Earn</span>
				</Typography>
				<div className={styles.earnPoints}>
					<div className={styles.onePoint} data-aos="zoom-in-up">
						<div className={styles.topSection}>
							<Typography className={styles.pointNumber}>
								1
							</Typography>
							<Typography className={styles.pointTitle}>
								Choose the discipline
							</Typography>
							<Typography className={styles.pointDesc}>
								Running, riding a bike, and gym
							</Typography>
							<div
								className={`${styles.dashes} ${styles.yellowDashes}`}
							></div>
						</div>
						<div className={styles.bottomSection}>
							<Image
								src={phone1}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>
					<div className={styles.onePoint} data-aos="zoom-in-up">
						<div className={styles.topSection}>
							<Typography className={styles.pointNumber}>
								2
							</Typography>
							<Typography className={styles.pointTitle}>
								Pick the task
							</Typography>
							<Typography className={styles.pointDesc}>
								Each discipline is made of dozens of tasks
							</Typography>
							<div
								className={`${styles.dashes} ${styles.redDashes}`}
							></div>
						</div>
						<div className={styles.bottomSection}>
							<Image
								src={phone2}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>
					<div className={styles.onePoint} data-aos="zoom-in-up">
						<div className={styles.topSection}>
							<Typography className={styles.pointNumber}>
								3
							</Typography>
							<Typography className={styles.pointTitle}>
								Get Paid
							</Typography>
							<Typography className={styles.pointDesc}>
								Each complete training equals a fixed number of
								$TRAIN
							</Typography>
						</div>
						<div className={styles.bottomSection}>
							<Image
								src={phone3}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Earn;
