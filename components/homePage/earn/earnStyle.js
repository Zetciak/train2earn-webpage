// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';
import bgRedLine2 from '../../../public/bgRedLine2.png';
import bgYellowLine2 from '../../../public/bgYellowLine2.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '1126px',
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

	earnPoints: {
		width: '100%',
		position: 'relative',
		marginTop: '80px',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
	},

	onePoint: {
		position: 'relative',
		display: 'inline-block',

		'&:nth-child(1)': {
			width: '35%',

			'&:before': {
				content: "''",
				position: 'absolute',
				width: '440px',
				height: '274px',
				right: '-64px',
				top: '150px',
				background: `url(${bgRedLine2.src})`,
				backgroundSize: '100% 100%',
				'z-index': '-1',
				pointerEvents: 'none',
				transform: 'rotate(-69.53deg)',
			},
		},

		'&:nth-child(2)': {
			width: '35%',
		},

		'&:nth-child(3)': {
			width: '25%',

			'&:before': {
				content: "''",
				position: 'absolute',
				width: '440px',
				height: '274px',
				left: '-215px',
				top: '310px',
				background: `url(${bgYellowLine2.src})`,
				backgroundSize: '100% 100%',
				'z-index': '-1',
				pointerEvents: 'none',
				transform: 'rotate(110.47deg)',
			},
		},
	},

	topSection: {
		width: '100%',
		position: 'relative',
	},

	pointNumber: {
		width: '72px',
		height: '72px',
		padding: '20px 28px',
		background: 'rgba(20, 22, 31, 0.8)',
		backdropFilter: 'blur(5px)',
		borderRadius: '100%',
		float: 'left',

		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '32px',
		lineHeight: '100%',
		color: '#FFFFFF',
		position: 'relative',
	},

	pointTitle: {
		float: 'left',
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		position: 'relative',
		marginLeft: '24px',
		marginTop: '18px',
		maxWidth: '210px',
	},

	pointDesc: {
		float: 'left',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '100%',
		color: 'rgba(255, 255, 255, 0.8)',
		position: 'relative',
		marginLeft: '24px',
		marginTop: '6px',
		maxWidth: '185px',
	},

	dashes: {
		width: '60px',
		height: '2px',
		float: 'right',
		position: 'relative',
		marginLeft: '24px',
		marginTop: '6px',
	},

	yellowDashes: {
		borderBottom: `2px dashed ${getVariable['colors']['pageMainYellow']}`,
	},

	redDashes: {
		borderBottom: `2px dashed ${getVariable['colors']['pageMainRed']}`,
	},

	bottomSection: {
		width: '246px',
		height: '499px',
		position: 'relative',
		clear: 'both',
		float: 'left',
		marginTop: '40px',

		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-20px',
		},
	},

	yellowEllipse: {
		width: '3030px',
		height: '2526px',
		position: 'absolute',

		right: '-2000px',
		top: '-400px',
	},

	redEllipse: {
		width: '2581px',
		height: '2414px',
		position: 'absolute',

		left: '-1300px',
		top: '-700px',
	},

	// >> Responsive scale
	// 1265px
	['@media (max-width: 1265px)']: {
		insideDiv: {
			width: '90%',
		},

		onePoint: {
			'&:nth-child(1)': {
				width: '31%',
			},

			'&:nth-child(2)': {
				width: '31%',
			},

			'&:nth-child(3)': {
				width: '31%',
			},
		},

		dashes: {
			display: 'none',
		},
	},

	// 1130px
	['@media (max-width: 1130px)']: {
		pointNumber: {
			width: '72px',
			height: '72px',
			margin: '0 auto',
			float: 'none',
		},

		bottomSection: {
			width: '100%',
			margin: '0 auto',
			marginTop: '40px',
			height: 'auto',
		},

		pointTitle: {
			width: '100%',
			textAlign: 'center',
			marginLeft: '0px',
		},

		pointDesc: {
			width: '100%',
			textAlign: 'center',
			marginLeft: '0px',
		},
	},

	// 660px
	['@media (max-width: 660px)']: {
		earnPoints: {
			position: 'relative',
			display: 'block',
			marginTop: '30px',
		},

		onePoint: {
			display: 'block',
			position: 'relative',
			marginTop: '30px',

			'&:nth-child(1)': {
				width: '100%',
				marginTop: '0px',
			},

			'&:nth-child(2)': {
				width: '100%',
			},

			'&:nth-child(3)': {
				width: '100%',
			},
		},

		bottomSection: {
			width: '40%',
			margin: '0 auto',
			marginTop: '100px',
			clear: 'both',
			float: 'none',
		},

		outsideDiv: {
			marginTop: '100px',
		},
	},

	// 490px
	['@media (max-width: 490px)']: {
		bottomSection: {
			width: '70%',
		},
	},
});

export default useStyles;
