import { combineReducers } from 'redux';
import worldChampionsReducer from './worldChampionsReducer';
import yearlyWinnersReducer from './yearlyWinnersReducer'
import worldChampionReducer from './worldChampionReducer'

export default combineReducers({
    wcreducer: worldChampionsReducer,
    yearlyreducer: yearlyWinnersReducer,
    champreducer: worldChampionReducer
});