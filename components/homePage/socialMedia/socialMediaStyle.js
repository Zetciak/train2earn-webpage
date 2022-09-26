// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import textLines from '../../../public/textLines.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		height: '139px',
		position: 'relative',
		float: 'left',
		'z-index': '4',
		marginTop: '133px',
		background: 'rgba(20, 22, 31, 0.4)',
		backdropFilter: 'blur(5px)',
	},

	insideDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	marquee: {
		width: '100%',
		maxWidth: '2000px',
		margin: '0 auto',
		position: 'relative',
	},

	oneSocial: {
		marginTop: '62px',
		position: 'relative',
		marginRight: '80px',

		'& .arrowIcon': {
			width: '14px',
			height: 'auto',
			color: getVariable['colors']['pageMainYellow'],
			float: 'left',
			marginTop: '3px',
			opacity: '0',
			marginLeft: '4px',
			transition: `opacity ${getVariable['numbers']['transitionTime']}, margin-left ${getVariable['numbers']['transitionTime']}`,
		},

		'&:hover': {
			'& .arrowIcon': {
				opacity: '1',
				marginLeft: '10px',
			},
		},
	},

	socialIcon: {
		width: '20px',
		height: '20px',
		position: 'relative',
		float: 'left',
		marginRight: '10px',
	},

	socialTitle: {
		position: 'relative',
		float: 'left',

		marginTop: '-3px',
		fontFamily: 'GRIFTER',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '20px',
		lineHeight: '130%',

		background: 'linear-gradient(90.89deg, #E51A1A 3.76%, #CC9F00 99.67%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
	},
});

export default useStyles;
