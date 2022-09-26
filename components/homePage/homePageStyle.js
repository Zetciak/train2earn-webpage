// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from '../globalVariables';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	componentsDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
		'z-index': '3',
	},
});

export default useStyles;
