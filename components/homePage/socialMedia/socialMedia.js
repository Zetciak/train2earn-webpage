// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './socialMediaStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import twitter from '../../../public/icons/twitter.svg';
import telegram from '../../../public/icons/telegram.svg';
import discord from '../../../public/icons/discord.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// >> Variables
let partners = [
	{ icon: twitter, text: 'Follow Twitter', link: 'https://twitter.com/Train2EarnDeFi' },
	{ icon: telegram, text: 'Join Telegram', link: 'https://t.me/Train2EarnDeFi' },
];

// >> Script
function SocialMedia() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const [drawPartners, setDawPartners] = useState([]);

	useEffect(() => {
		let drawPartnersL = [];
		partners.map((element, index) => {
			drawPartnersL.push(
				<div key={index} className={styles.oneSocial}>
					<a href={element.link} target="_blank" rel="noreferrer">
						<div className={styles.socialIcon}>
							<Image
								src={element.icon}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<Typography className={styles.socialTitle}>
							{element.text}
						</Typography>
						<ArrowForwardIosIcon className="arrowIcon" />
					</a>
				</div>
			);
		});
		setDawPartners(drawPartnersL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} data-aos="fade-up">
			<div className={styles.insideDiv}>
				<Marquee className={styles.marquee} gradient={false} speed={50}>
					{drawPartners}
					{drawPartners}
					{drawPartners}
					{drawPartners}
				</Marquee>
			</div>
		</div>
	);
}

export default SocialMedia;
