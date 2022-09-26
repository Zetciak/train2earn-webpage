// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';

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
		marginTop: '130px',
	},

	backgroundElements: {
		width: '100%',
		position: 'absolute',
		top: '0px',
		left: '0px',
		pointerEvents: 'none',
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

	elementList: {
		marginTop: '24px',
		padding: '15px 32px',
		width: '383px',
		position: 'relative',

		background: 'rgba(20, 22, 31, 0.4)',
		backdropFilter: 'blur(5px)',
	},

	oneEementList: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '14px',
		lineHeight: '130%',
		color: '#FFFFFF',
		transition: `color ${getVariable['numbers']['transitionTime']}`,
		position: 'relative',
		display: 'inline-block',
		marginRight: '40px',

		'&:last-child': {
			marginRight: '0px',
		},

		'&:hover': {
			color: 'rgba(255, 255, 255, .8)',
			cursor: 'pointer',
		},
	},

	oneEementListSelected: {
		background: 'linear-gradient(90.89deg, #E51A1A 3.76%, #CC9F00 99.67%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
	},

	faqPoints: {
		width: '100%',
		position: 'relative',

		display: 'flex',
		flexFlow: 'row wrap',
		alignContent: 'space-between',
		justifyContent: 'space-between',
	},

	faqPointBefore: {
		width: '410px',
		height: '195px',
		position: 'relative',
		marginTop: '40px',
		display: 'inline-block',

		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-20px',
		},
	},

	faqPoint: {
		width: '100%',
		height: '100%',
		position: 'relative',
		background: `rgba(20, 22, 31, .4)`,
		backdropFilter: 'blur(5px)',
		clipPath:
			'polygon(0% 0%, calc(100% - 91px) 0%, 100% calc(0% + 36px), 100% 100%, 0 100%, 0 calc(0% + 36px));',
		padding: '32px',
	},

	pointTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '150%',
		color: '#FFFFFF',
		position: 'relative',
	},

	pointDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.8)',
		position: 'relative',
		marginTop: '8px',
	},

	bgImage3: {
		width: '353px',
		height: '353px',
		position: 'absolute',

		left: '50%',
		top: '-90px',
		transform: 'translate(-50%,0%)',
	},

	bgRedLine4: {
		width: '440px',
		height: '390px',
		position: 'absolute',

		left: '200px',
		top: '250px',
	},

	bgYellowLine4: {
		width: '418px',
		height: '288px',
		position: 'absolute',

		right: '-30px',
		top: '-30px',
	},

	redEllipse5: {
		width: '2451px',
		height: '2322px',
		position: 'absolute',

		left: '-900px',
		top: '-600px',
	},

	yellowEllipse5: {
		width: '2451px',
		height: '2322px',
		position: 'absolute',

		right: '-1200px',
		top: '-600px',
	},

	// >> Responsive scale
	// 1435px
	['@media (max-width: 1435px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1000px
	['@media (max-width: 1000px)']: {
		insideDiv: {
			width: '90%',
		},

		faqPointBefore: {
			margin: '0 auto',
			display: 'block',
			marginTop: '30px',
		},

		faqPoints: {
			width: '100%',
			position: 'relative',
			display: 'block',
		},

		elementList: {
			margin: '0 auto',
			marginTop: '24px',
		},

		mainTitle: {
			width: '100%',
			textAlign: 'center',
		},
	},

	// 512px
	['@media (max-width: 512px)']: {
		faqPointBefore: {
			width: '100%',
			height: 'auto',
		},

		elementList: {
			width: '100%',
			display: 'flex',
			flexFlow: 'row wrap',
			alignContent: 'space-between',
			justifyContent: 'space-between',
		},

		oneEementList: {
			marginRight: '0px',

			'&:last-child': {
				marginRight: '0px',
			},
		},
	},
});

export default useStyles;
