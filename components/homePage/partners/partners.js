// >> Modules
import getVariable from '../../globalVariables';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './partnersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import benziga from '../../../public/partners/benziga.png';
import binance from '../../../public/partners/binance.png';
import bscscan from '../../../public/partners/bscscan.png';
import coingecko from '../../../public/partners/coingecko.png';
import coinmarketcap from '../../../public/partners/coinmarketcap.png';
import marketwatch from '../../../public/partners/marketwatch.png';
import pinksale from '../../../public/partners/pinksale.png';
import yahoo from '../../../public/partners/yahoo.png';

// >> Variables
let partners = [
	{ logo: benziga, link: '' },
	{ logo: binance, link: '' },
	{ logo: bscscan, link: '' },
	{ logo: coingecko, link: '' },
	{ logo: coinmarketcap, link: '' },
	{ logo: marketwatch, link: '' },
	{ logo: pinksale, link: '' },
	{ logo: yahoo, link: '' },
];

// >> Script
function Partners() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const [drawPartners, setDawPartners] = useState([]);

	useEffect(() => {
		let drawPartnersL = [];
		partners.map((element, index) => {
			drawPartnersL.push(
				<div key={index} className={styles.oneBanner}>
					<a href={element.link} target="_blank" rel="noreferrer">
						<Image
							src={element.logo}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
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
				</Marquee>
			</div>
		</div>
	);
}

export default Partners;
