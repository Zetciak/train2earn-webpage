// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';
import bgRedLine3 from '../../../public/bgRedLine3.png';
import bgYellowLine3 from '../../../public/bgYellowLine3.png';
import appStore from '../../../public/appStore.png';
import googlePlay from '../../../public/googlePlay.png';

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
		marginTop: '200px',
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
		textAlign: 'center',
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

	mainDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.8)',
		position: 'relative',
		marginTop: '16px',
	},

	leftSection: {
		float: 'left',
		width: '375px',
		position: 'relative',
		marginTop: '159px',
	},

	buttonsDiv: {
		width: '324px',
		height: '51px',
		position: 'relative',
		marginTop: '25.5px',
	},

	googlePlayButtonDiv: {
		width: '48%',
		height: '100%',
		float: 'left',
		position: 'relative',
	},

	googlePlayButton: {
		width: '100%',
		height: '100%',
		background: `url(${googlePlay.src})`,
		backgroundSize: '100% 100%',
		boxShadow: 'none',
		opacity: '1',
		transition: `opacity ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: `url(${googlePlay.src})`,
			backgroundSize: '100% 100%',
			boxShadow: 'none',
			opacity: '.8',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	appStoreButtonDiv: {
		width: '48%',
		height: '100%',
		float: 'right',
		position: 'relative',
	},

	appStoreButton: {
		width: '100%',
		height: '100%',
		background: `url(${appStore.src})`,
		backgroundSize: '100% 100%',
		boxShadow: 'none',
		opacity: '1',
		transition: `opacity ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: `url(${appStore.src})`,
			backgroundSize: '100% 100%',
			boxShadow: 'none',
			opacity: '.8',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	centerSection: {
		width: '276px',
		height: '569px',
		position: 'absolute',

		left: '50%',
		transform: 'translate(-50%,0%)',

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '440px',
			height: '274px',
			left: '-230px',
			bottom: '30px',
			background: `url(${bgRedLine3.src})`,
			backgroundSize: '100% 100%',
			'z-index': '-1',
			transform: 'rotate(130deg)',
			pointerEvents: 'none',
		},

		'&:after': {
			content: "''",
			position: 'absolute',
			width: '145px',
			height: '277px',
			right: '-60px',
			top: '20px',
			background: `url(${bgYellowLine3.src})`,
			backgroundSize: '100% 100%',
			'z-index': '-1',
			transform: 'rotate(-177deg)',
			pointerEvents: 'none',
		},

		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-20px',
		},
	},

	rightSection: {
		width: '410px',
		float: 'right',
		position: 'relatvie',
	},

	oneFeatureBefore: {
		width: '100%',
		height: '163px',
		position: 'relative',
		marginTop: '40px',

		'&:first-child': {
			marginTop: '0px',
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
			'polygon(0% 0%, calc(100% - 91px) 0%, 100% calc(0% + 36px), 100% 100%, 0 100%, 0 calc(0% + 36px));',
		padding: '32px',
	},

	featureIcon: {
		float: 'left',
		width: '56px',
		height: '56px',
		position: 'relative',
		marginTop: '24px',
	},

	featureTexts: {
		float: 'left',
		width: '235px',
		position: 'relative',
		marginLeft: '32px',
		marginTop: '4px',
	},

	featureTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
	},

	featureDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.8)',
		marginTop: '8px',
	},

	redEllipse4: {
		width: '2330px',
		height: '2442px',
		position: 'absolute',

		left: '-900px',
		top: '-800px',
	},

	yellowEllipse4: {
		width: '2330px',
		height: '2442px',
		position: 'absolute',

		right: '-900px',
		top: '-800px',
	},

	// >> Responsive scale
	// 1435px
	['@media (max-width: 1435px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1285px
	['@media (max-width: 1285px)']: {
		centerSection: {
			display: 'none',
		},
	},

	// 910px
	['@media (max-width: 910px)']: {
		leftSection: {
			width: '100%',
		},

		mainTitle: {
			width: '100%',
		},

		mainDesc: {
			width: '100%',
			textAlign: 'center',
		},

		buttonsDiv: {
			margin: '0 auto',
			marginTop: '25.5px',
			marginBottom: '30px',
		},

		rightSection: {
			margin: '0 auto',
			float: 'none',
			clear: 'both',
		},

		outsideDiv: {
			marginTop: '50px',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		rightSection: {
			width: '100%',
		},

		oneFeatureBefore: {
			width: '100%',
			height: 'auto',
			margin: '0 auto',
			marginTop: '40px',
		},

		oneFeature: {
			padding: '16px',
		},

		featureIcon: {
			float: 'none',
			clear: 'both',
			margin: '0 auto',
		},

		featureTexts: {
			float: 'none',
			clear: 'both',
			width: '90%',
			margin: '0 auto',
			marginTop: '4px',
		},

		featureTitle: {
			width: '100%',
			textAlign: 'center',
			marginTop: '8px',
		},

		featureDesc: {
			width: '100%',
			textAlign: 'center',
			marginTop: '8px',
		},
	},

	// 390px
	['@media (max-width: 390px)']: {
		buttonsDiv: {
			width: '155px',
			height: '70px',
			marginBottom: '80px',
		},

		googlePlayButtonDiv: {
			width: '100%',
			height: '51px',
		},

		appStoreButtonDiv: {
			width: '100%',
			height: '51px',
			marginTop: '10px',
		},
	},
});

export default useStyles;
