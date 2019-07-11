import {combineReducers} from 'redux';
import hotels from './hotels.reducer';

const reducer = combineReducers({
    hotels,
});

export default reducer;
