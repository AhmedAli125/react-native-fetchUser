import {combineEpics} from 'redux-most';
import epicActions from '../epicsActions/epicActions';

const rootEpic = combineEpics([epicActions]);

export default rootEpic;
