// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';
import bgRedLine from '../../../public/bgRedLine.png';
import bgYellowLine from '../../../public/bgYellowLine.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '1312px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '110px',
	},

	mainTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '48px',
		lineHeight: '130%',
		color: '#FFFFFF',
		position: 'relative',
	},

	textLines: {
		position: 'relative',

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: '0',
			top: '0',
			background: `url(${textLines.src})`,
			backgroundSize: '100% 100%',
			'z-index': '-1',
			pointerEvents: 'none',
		},
	},

	featuresDiv: {
		width: '100%',
		position: 'relative',
		marginTop: '80px',

		display: 'flex',
		flexFlow: 'row wrap',
		alignContent: 'space-between',
		justifyContent: 'space-between',
	},

	oneFeatureBefore: {
		width: '410px',
		minHeight: '339px',
		position: 'relative',
		display: 'inline-block',

		'&:nth-child(2)': {
			'&:before': {
				content: "''",
				position: 'absolute',
				width: '100%',
				height: '288px',
				left: '-38px',
				top: '-176px',
				background: `url(${bgRedLine.src})`,
				backgroundSize: '100% 100%',
				'z-index': '-1',
				pointerEvents: 'none',
			},
		},

		'&:nth-child(3)': {
			'&:before': {
				content: "''",
				position: 'absolute',
				width: '100%',
				height: '288px',
				right: '-38px',
				top: '-176px',
				background: `url(${bgYellowLine.src})`,
				backgroundSize: '100% 100%',
				'z-index': '-1',
				pointerEvents: 'none',
			},
		},

		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-20px',
		},
	},

	oneFeature: {
		width: '100%',
		height: '100%',
		position: 'relative',
		background: `rgba(20, 22, 31, .4)`,
		backdropFilter: 'blur(5px)',
		clipPath:
			'polygon(calc(0% + 91px) 0%, calc(100% - 91px) 0%, 100% calc(0% + 36px), 100% 100%, 0 100%, 0 calc(0% + 36px));',
		padding: '25px 0',
	},

	featureIcon: {
		width: '112px',
		height: '112px',
		margin: '0 auto',
		position: 'relative',
	},

	featureTitle: {
		width: '70%',
		margin: '0 auto',
		marginTop: '48px',
		position: 'relative',

		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '150%',
		color: '#FFFFFF',
		textAlign: 'center',
	},

	featureDesc: {
		width: '70%',
		margin: '0 auto',
		marginTop: '8px',
		position: 'relative',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.8)',
		textAlign: 'center',
	},

	// >> Responsive scale
	// 1435px
	['@media (max-width: 1435px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1410px
	['@media (max-width: 1410px)']: {
		oneFeatureBefore: {
			width: '32%',
			height: 'auto',
		},
	},

	// 1070px
	['@media (max-width: 1070px)']: {
		featuresDiv: {
			display: 'block',
		},

		oneFeatureBefore: {
			display: 'block',
			width: '410px',
			margin: '0 auto',
			marginTop: '30px',
		},

		mainTitle: {
			width: '100%',
			textAlign: 'center',
		},
	},

	// 512px
	['@media (max-width: 512px)']: {
		oneFeatureBefore: {
			width: '90%',
		},

		featureTitle: {
			width: '85%',
		},

		featureDesc: {
			width: '85%',
		},
	},

	// 412px
	['@media (max-width: 412px)']: {
		mainTitle: {
			fontSize: '36px',
		},
	},
});

export default useStyles;
