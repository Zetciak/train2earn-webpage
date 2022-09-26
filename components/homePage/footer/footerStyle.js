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
		marginTop: '101px',
		background: 'rgba(20, 22, 31, 0.4)',
		backdropFilter: 'blur(10px)',
		paddingBottom: '0px',
	},

	insideDiv: {
		width: '1312px',
		margin: '0 auto',
		position: 'relative',
		padding: '44px 0',
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

	logoDiv: {
		width: '124px',
		height: 'auto',
		position: 'relative',
		margin: '0 auto',
	},

	navElements: {
		width: '50%',
		margin: '0 auto',
		paddingTop: '10px',
		display: 'flex',
		flexFlow: 'row wrap',
		alignContent: 'space-between',
		justifyContent: 'space-between',
	},

	oneRightLink: {
		display: 'inline-block',
		marginRight: '23px',
		marginTop: '24px',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '150%',
			color: 'rgba(255, 255, 255, 0.8)',
			transition: `color ${getVariable['numbers']['transitionTime']}`,
		},

		'&:hover': {
			cursor: 'pointer',
			'& p': {
				color: 'rgba(255, 255, 255, 1)',
			},
		},

		'&:last-child': {
			marginRight: '0px',
		},
	},

	lineDiv: {
		width: '100%',
		height: '1px',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0.05)',
		float: 'left',
		marginTop: '32px',
	},

	bottomDiv: {
		width: '100%',
		position: 'relative',
		marginTop: '40px',
		float: 'left',
	},

	bottomRight: {
		width: '112px',
		margin: '0 auto',
		marginTop: '90px',
		position: 'relative',
	},

	bottomRightButton: {
		width: '48px',
		height: '48px',
		position: 'relative',
		display: 'inline-block',
		marginRight: '16px',
		marginTop: '-40px',
		background: 'none',
		boxShadow: 'none',
		borderRadius: '100%',
		transition: `border ${getVariable['numbers']['transitionTime']}`,
		border: `1px solid ${getVariable['colors']['pageMainYellow']}`,

		'&:hover': {
			background: 'none',
			border: `1px solid ${getVariable['colors']['pageMainYellowHover']}`,
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF',
		},

		'&:last-child': {
			marginRight: '0px',
		},
	},

	bottomRightButtonImage: {
		width: '100%',
		height: '100%',
	},

	// >> Responsive scale
	// 1435px
	['@media (max-width: 1435px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1150px
	['@media (max-width: 1150px)']: {
		navElements: {
			width: '80%',
		},
	},

	// 830px
	['@media (max-width: 830px)']: {
		logoDiv: {
			margin: '0 auto',
		},

		navElements: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignContent: 'space-between',
			justifyContent: 'space-between',
		},

		oneRightLink: {
			display: 'inline-block',
			marginRight: '0px',
			marginTop: '24px',
		},
	},

	// 650px
	['@media (max-width: 650px)']: {
		navElements: {
			width: '100%',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		oneRightLink: {
			width: '100%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '10px',
		},
	},
});

export default useStyles;
