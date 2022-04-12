import { IJobsList } from '../utils';
import {
   FILTER_ADDED,
   ALL_FILTERS_REMOVE,
   FILTER_REMOVED,
   FILTER_NEW,
} from './ActionTypes';

const AppReducers = (state, action: { type: string; payload: IJobsList }) => {
   switch (action.type) {
      case FILTER_ADDED:
         return {
            ...state,
            filterList: [action.payload, ...state.filterList],
         };
      case ALL_FILTERS_REMOVE:
         return {
            ...state,
            filterList: state.filterList.splice(0, state.length),
         };

      case FILTER_REMOVED:
         return {
            ...state,
            filterList: state.filterList.filter(
               (item: IJobsList) => item !== action.payload
            ),
         };
      case FILTER_NEW:
         return {
            ...state,
            filterList: [action.payload],
         };
      default:
         return state;
   }
};

export default AppReducers;
