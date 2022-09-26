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
		marginTop: '110px',
	},

	backgroundElements: {
		width: '100%',
		position: 'absolute',
		top: '0px',
		left: '0px',
		pointerEvents: 'none',
	},

	leftSection: {
		float: 'left',
		width: '710px',
		marginTop: '185px',
		position: 'relative',
		'z-index': '2',
	},

	rightSection: {
		position: 'absolute',
		right: '-50px',
		top: '0px',
		width: '616px',
		height: '664px',
		'z-index': '1',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-20px',
		},
	},

	mainTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '64px',
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

	mainDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.8)',
		position: 'relative',
		marginTop: '8px',
		width: '595px',
	},

	buttonsDiv: {
		marginTop: '32px',
		position: 'relative',
	},

	leftButtonDiv: {
		marginRight: '16px',
		float: 'left',
		position: 'relative',
	},

	rightButtonDiv: {
		float: 'left',
		position: 'relative',
	},

	leftButton: {
		minWidth: '248px',
		height: '64px',
		padding: '22px 48px',
		background: getVariable['colors']['pageMainGradient'],
		boxShadow: 'none',
		borderRadius: '50px',
		position: 'relative',

		'&:hover': {
			background: getVariable['colors']['pageMainGradient'],
			boxShadow: 'none',

			'&:before': {
				opacity: '1',
			},
		},

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			borderRadius: '50px',
			background: getVariable['colors']['pageMainGradientHover'],
			'z-index': '1',
			opacity: '0',
			transition: `opacity ${getVariable['numbers']['transitionTime']}`,
		},

		'& p': {
			fontFamily: 'GRIFTER',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
			'z-index': '2',
		},

		'& span': {
			color: '#FFFFFF',
			'z-index': '2',
		},
	},

	rightButton: {
		minWidth: '197px',
		height: '64px',
		padding: '22px 48px',
		background: 'none',
		border: `1px solid ${getVariable['colors']['pageMainYellow']}`,
		boxShadow: 'none',
		borderRadius: '50px',
		position: 'relative',
		transition: `border ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: 'none',
			boxShadow: 'none',
			border: `1px solid ${getVariable['colors']['pageMainYellowHover']}`,

			'&:before': {
				opacity: '1',
			},
		},

		'& p': {
			fontFamily: 'GRIFTER',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	yellowEllipse: {
		width: '3030px',
		height: '2526px',
		position: 'absolute',

		left: '-1500px',
		top: '-800px',
	},

	redEllipse: {
		width: '3160px',
		height: '2591px',
		position: 'absolute',

		right: '-1600px',
		top: '-900px',
	},

	// >> Responsive scale
	// 1435px
	['@media (max-width: 1435px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1370px
	['@media (max-width: 1370px)']: {
		outsideDiv: {
			marginTop: '30px',
		},

		leftSection: {
			width: '100%',
		},

		rightSection: {
			position: 'relative',
			clear: 'both',
			float: 'none',
			margin: '0 auto',
			top: '50px',
			right: 'none',
		},

		mainTitle: {
			width: '70%',
			margin: '0 auto',
			textAlign: 'center',
		},

		mainDesc: {
			width: '70%',
			margin: '0 auto',
			marginTop: '8px',
			textAlign: 'center',
		},

		buttonsDiv: {
			marginTop: '32px',
			display: 'flex',
			alignIttems: 'center',
			justifyContent: 'center',
		},
	},

	// 1140px
	['@media (max-width: 1140px)']: {
		mainTitle: {
			width: '90%',
		},

		mainDesc: {
			width: '90%',
		},
	},

	// 890px
	['@media (max-width: 890px)']: {
		mainTitle: {
			width: '100%',
		},

		mainDesc: {
			width: '100%',
		},
	},

	// 800px
	['@media (max-width: 800px)']: {
		textLines: {
			'&:before': {
				opacity: '0',
			},
		},
	},

	// 730px
	['@media (max-width: 730px)']: {
		rightSection: {
			width: '100%',
			left: '3%',
			height: 'auto',
		},
	},

	// 670px
	['@media (max-width: 670px)']: {
		mainTitle: {
			fontSize: '44px',
			lineHeight: '130%',
		},

		mainDesc: {
			fontSize: '16px',
			lineHeight: '200%',
		},
	},

	// 531px
	['@media (max-width: 531px)']: {
		buttonsDiv: {
			display: 'block',
			width: '70%',
			margin: '0 auto',
			marginTop: '22px',
		},

		leftButtonDiv: {
			width: '100%',
			float: 'none',
			clear: 'both',
		},

		rightButtonDiv: {
			width: '70%',
			margin: '0 auto',
			float: 'none',
			clear: 'both',
			marginTop: '12px',
		},

		leftButton: {
			width: '100%',
			minWidth: '0px',
		},

		rightButton: {
			width: '100%',
			minWidth: '0px',
		},

		outsideDiv: {
			marginTop: '-30px',
		},
	},

	// 480px
	['@media (max-width: 480px)']: {
		rightButtonDiv: {
			width: '90%',
		},
	},

	// 420px
	['@media (max-width: 420px)']: {
		mainTitle: {
			fontSize: '38px',
			lineHeight: '130%',
		},
	},

	// 370px
	['@media (max-width: 370px)']: {
		mainTitle: {
			fontSize: '34px',
			lineHeight: '130%',
		},

		mainDesc: {
			fontSize: '15px',
			lineHeight: '200%',
		},
	},

	// 335px
	['@media (max-width: 335px)']: {
		mainTitle: {
			fontSize: '30px',
			lineHeight: '130%',
		},

		mainDesc: {
			fontSize: '14px',
			lineHeight: '160%',
		},
	},
});

export default useStyles;
