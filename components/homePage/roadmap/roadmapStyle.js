// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';
import roadmapLines from '../../../public/roadmapLines.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '100%',
		maxWidth: '1304px',
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
		position: 'relative',

		float: 'left',
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

	roadmapDiv: {
		width: '100%',
		position: 'relative',
		paddingTop: '80px',

		display: 'flex',
		flexFlow: 'row wrap',
		alignContent: 'space-between',
		justifyContent: 'space-between',
	},

	roadmapOne: {
		width: '392px',
		position: 'relative',
		display: 'inline-block',
	},

	secondRoadmap: {
		marginTop: '104px',
	},

	thirdRoadmap: {
		marginTop: '208px',
	},

	roadmapCircle: {
		width: '72px',
		height: '72px',
		position: 'relative',
		borderRadius: '100%',
		background: 'rgba(20, 22, 31, 0.8)',
		backdropFilter: 'blur(5px)',
		float: 'left',

		'& p': {
			fontFamily: 'GRIFTER',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '28px',
			lineHeight: '100%',
			color: '#FFFFFF',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
		},
	},

	roadmapTitle: {
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		float: 'left',
		marginLeft: '24px',
		marginTop: '26px',
	},

	roadmapPoints: {
		float: 'left',
		width: '100%',
		position: 'relative',
		marginTop: '32px',
	},

	roadmapPoint: {
		width: '100%',
		height: 'auto',
		minHeight: '91px',
		position: 'relative',
		marginBottom: '24px',
		padding: '8px 0',

		background: `rgba(20, 22, 31, .4)`,
		backdropFilter: 'blur(5px)',
		clipPath:
			'polygon(0% 0%, calc(100% - 91px) 0%, 100% calc(0% + 36px), 100% 100%, 0 100%, 0 calc(0% + 36px));',

		transition: 'top .5s',
		top: '0px',

		'&:hover': {
			top: '-10px',
		},
	},

	roadmapPointTitle: {
		position: 'absolute',
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '115%',
		color: '#FFFFFF',
		float: 'left',
		marginLeft: '32px',
		width: '70%',
		top: '50%',
		translate: '0 -50%',
	},

	roadmapImage: {
		position: 'relative',
		width: '32px',
		height: '32px',
		float: 'right',
		marginRight: '16px',
		marginTop: '45px',
	},

	redEllipse3: {
		width: '2581px',
		height: '2414px',
		position: 'absolute',

		left: '-1500px',
		top: '-1000px',
	},

	yellowEllipse3: {
		width: '2592px',
		height: '2389px',
		position: 'absolute',

		right: '-1900px',
		top: '-800px',
	},

	roadmapArrows: {
		width: '930px',
		height: '232px',
		position: 'absolute',

		left: '27px',
		top: '100px',
	},

	// >> Responsive scale
	// 1350px
	['@media (max-width: 1350px)']: {
		insideDiv: {
			width: '90%',
		},

		roadmapArrows: {
			display: 'none',
		},

		roadmapOne: {
			width: '100%',
		},

		secondRoadmap: {
			marginTop: '60px',
		},

		thirdRoadmap: {
			marginTop: '60px',
		},
	},

	// 1070px
	['@media (max-width: 1070px)']: {
		mainTitle: {
			width: '90%',
			margin: '0 auto',
			textAlign: 'center',
			float: 'none',
			clear: 'both',
		},
	},

	// 420px
	['@media (max-width: 420px)']: {
		textLines: {
			'&:before': {
				opacity: '0',
			},
		},
	},
});

export default useStyles;
