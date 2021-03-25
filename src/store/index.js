import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-most';
import rootEpic from './epicsActions/app.epics';
// import epicActions from './epicsActions/epicActions';

const epicMiddleWare = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleWare));

export default store;
