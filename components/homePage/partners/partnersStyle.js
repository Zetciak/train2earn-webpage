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
		marginTop: '211px',
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

	oneBanner: {
		width: '140px',
		height: '56px',
		position: 'relative',
		marginRight: '50px',
		marginTop: '42px',

		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-10px',
		},
	},
});

export default useStyles;
