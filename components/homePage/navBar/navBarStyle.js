// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		height: '88px',
		position: 'fixed',
		float: 'left',
		'z-index': '5',
		background: 'rgba(9, 13, 17, 0.4)',
		backdropFilter: 'blur(10px)',
	},

	insideDiv: {
		width: '1312px',
		margin: '0 auto',
		position: 'relative',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
	},

	leftSection: {
		marginTop: '33px',
		width: '130px',
		height: '40px',
		position: 'relative',
	},

	centerSection: {
		marginTop: '35px',
		position: 'relative',
	},

	oneCenterElement: {
		display: 'inline-block',
		marginRight: '56px',

		'& p': {
			fontFamily: 'GRIFTER',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '130%',
			color: 'rgba(255, 255, 255, 0.75)',
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

	rightSection: {
		marginTop: '20px',
		position: 'relative',
	},

	button: {
		minWidth: '154px',
		height: '42px',
		padding: '15px 32px',
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
			fontSize: '14px',
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

	walletConnect: {
		width: '100vw',
		height: '100vh',
		background: 'rgba(0, 0, 0, 0.3)',
		backdropFilter: 'blur(5px)',
		transition: 'opacity 1s',
		'z-index': '5',
		position: 'fixed',
	},

	walletConnectInside: {
		width: '441px',
		height: 'auto',
		background: 'rgba(20, 22, 31, 0.6)',
		backdropFilter: 'blur(5px)',
		position: 'absolute',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		top: '50%',
		left: '50%',
		translate: '-50% -50%',
		padding: '0 32px',
		paddingBottom: '40px',
	},

	walletConnectTitle: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '24px',
		lineHeight: '100%',
		color: '#FFFFFF',
		marginTop: '40px',
	},

	walletConnectDesc: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '200%',
		color: 'rgba(255, 255, 255, 0.6)',
		marginTop: '8px',
	},

	oneWallet: {
		position: 'relative',
		width: '100%',
		height: '40px',
		marginTop: '24px',

		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	oneWalletInside: {
		position: 'absolute',
		left: '45%',
		translate: '-45% 0',
	},

	straightLine: {
		width: '100%',
		height: '1px',
		background: 'rgba(255, 255, 255, 0.1)',
		marginTop: '24px',
		position: 'relative',
	},

	iconLogo: {
		width: '43px',
		height: '40px',
		float: 'left',
	},

	walletName: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		float: 'left',
		marginLeft: '24px',
		marginTop: '12px',
	},

	bottomButtonDiv: {
		width: '100%',
		height: '48px',
		marginTop: '24px',
		position: 'relative',
	},

	bottomButton: {
		width: '100%',
		height: '100%',
		background: 'transparent',
		boxShadow: 'none',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		borderRadius: '50px',
		position: 'relative',
		transition: 'border .5s',

		'&:hover': {
			background: 'transparent',
			boxShadow: 'none',
			border: '1px solid rgba(255, 255, 255, 0.4)',
		},

		'& p': {
			fontFamily: 'GRIFTER',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	bottomButtonIcon: {
		width: '20px',
		height: 'auto',
		color: '#ffffff',
		marginRight: '3px',
		marginTop: '-1px',
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
		centerSection: {
			display: 'none',
		},
	},
});

export default useStyles;
