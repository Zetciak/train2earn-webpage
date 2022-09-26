// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';
import gradientCircle from '../../../public/gradientCircle.png';

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
		marginTop: '216px',
	},

	backgroundElements: {
		width: '100%',
		position: 'absolute',
		top: '0px',
		left: '0px',
		pointerEvents: 'none',
		'z-index': '-1',
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

	tokenomicsDiv: {
		width: '100%',
		position: 'relative',
		marginTop: '70px',
	},

	tokenomicsCircle: {
		width: '552px',
		height: '552px',
		position: 'relative',
		float: 'left',
		marginTop: '80px',
	},

	tokenomicsBars: {
		width: '684px',
		position: 'relative',
		float: 'right',
	},

	tokenomicsOneBar: {
		position: 'relative',
		width: '100%',
		height: '60px',
		marginBottom: '22px',
		background: `rgba(20, 22, 31, .4)`,
		backdropFilter: 'blur(5px)',
		clipPath:
			'polygon(0% 0%, calc(100% - 91px) 0%, 100% calc(0% + 36px), 100% 100%, 0 100%, 0 calc(0% + 36px));',
	},

	tokenomicsLeftColor: {
		width: '4px',
		height: '100%',
		float: 'left',
	},

	leftTexts: {
		float: 'left',
		marginLeft: '20px',
		marginTop: '8px',
	},

	rightTexts: {
		float: 'right',
		marginRight: '88px',
		marginTop: '8px',
	},

	percentText: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '20px',
		lineHeight: '100%',
		float: 'left',
	},

	percentTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		float: 'left',
		marginLeft: '8px',
		marginTop: '2px',
	},

	percentDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '100%',
		color: 'rgba(255, 255, 255, 0.8)',
		clear: 'both',
		float: 'left',
		marginTop: '7px',
	},

	rightNumber: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#ffffff',
	},

	rightDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '100%',
		color: 'rgba(255, 255, 255, 0.8)',
		marginTop: '7px',
	},

	tokenomicsTexts: {
		position: 'absolute',
		width: '100%',
		top: '50%',
		transform: 'translate(0%,-50%)',
		pointerEvents: 'none',
	},

	tokenomicsTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '56px',
		lineHeight: '100%',
		color: '#FFFFFF',
		textAlign: 'center',
	},

	tokenomicsDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '100%',
		color: 'rgba(255, 255, 255, 0.8)',
		textAlign: 'center',
		marginTop: '15px',
	},

	bgImage1: {
		width: '550px',
		height: '550px',
		position: 'absolute',
		transform: 'rotate(111deg)',

		left: '-350px',
		top: '-150px',
	},

	bgImage2: {
		width: '410px',
		height: '410px',
		position: 'absolute',
		transform: 'rotate(-41deg)',

		right: '-250px',
		top: '700px',
	},

	// >> Responsive scale
	// 1370px
	['@media (max-width: 1370px)']: {
		insideDiv: {
			width: '90%',
		},

		tokenomicsDiv: {
			width: '100%',
		},

		tokenomicsCircle: {
			float: 'none',
			clear: 'both',
			margin: '0 auto',
		},

		tokenomicsBars: {
			width: '100%',
			float: 'none',
			clear: 'both',
			marginTop: '50px',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		tokenomicsCircle: {
			width: '70vw',
			height: '70vw',
		},

		tokenomicsTitle: {
			fontSize: '40px',
		},

		tokenomicsOneBar: {
			paddingBottom: '16px',
			height: 'auto',
		},

		leftTexts: {
			marginLeft: '0px',
			float: 'none',
			clear: 'both',
			width: '100%',
		},

		rightTexts: {
			marginRight: '0px',
			float: 'none',
			clear: 'both',
			width: '100%',
		},

		percentText: {
			width: '100%',
			textAlign: 'center',
			marginTop: '14px',
		},

		percentTitle: {
			width: '100%',
			textAlign: 'center',
			marginTop: '6px',
			marginLeft: '0px',
		},

		percentDesc: {
			width: '100%',
			textAlign: 'center',
			marginTop: '8px',
			marginLeft: '0px',
		},

		rightNumber: {
			width: '100%',
			textAlign: 'center',
			paddingTop: '12px',
		},

		rightDesc: {
			width: '100%',
			textAlign: 'center',
			marginTop: '4px',
		},

		tokenomicsLeftColor: {
			position: 'absolute',
			left: '0px',
			top: '0px',
		},
	},

	// 660px
	['@media (max-width: 660px)']: {
		outsideDiv: {
			marginTop: '100px',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		textLines: {
			'&:before': {
				opacity: '0',
			},
		},
	},

	// 470px
	['@media (max-width: 470px)']: {
		tokenomicsCircle: {
			width: '80vw',
			height: '80vw',
		},

		tokenomicsTitle: {
			fontSize: '32px',
		},
	},
});

export default useStyles;
