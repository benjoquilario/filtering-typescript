import { createContext, useReducer } from 'react';
import jobListings from '../data/jobListings';
import AppReducers from './reducers';
import { IJobsList, Context, Props } from '../utils';

import {
   FILTER_ADDED,
   ALL_FILTERS_REMOVE,
   FILTER_REMOVED,
   FILTER_NEW,
} from './ActionTypes';

const initialContext: Context = {
   filterList: [],
   jobsList: jobListings,
   filterAdded: (): void => {
      throw new Error('filterAdded function must be overridden');
   },
   allFiltersRemoved: (): void => {
      throw new Error('allFiltersRemoved function must be overridden');
   },
   filterRemoved: (): void => {
      throw new Error('filterRemoved function must be overridden');
   },
   filterNew: (): void => {
      throw new Error('filterRemoved function must be overridden');
   },
};

export const GlobalContext = createContext<Context | null>(null);

export const GlobalProvider = ({ children }: Props) => {
   const [state, dispatch] = useReducer(AppReducers, initialContext);

   const filterAdded = (data: IJobsList): void => {
      dispatch({ type: FILTER_ADDED, payload: data });
   };

   const allFiltersRemoved = (): void => {
      dispatch({ type: ALL_FILTERS_REMOVE, payload: null });
   };

   const filterRemoved = (data: IJobsList): void => {
      dispatch({ type: FILTER_REMOVED, payload: data });
   };

   const filterNew = (data: IJobsList): void => {
      dispatch({ type: FILTER_NEW, payload: data });
   };

   return (
      <GlobalContext.Provider
         value={{
            jobsList: state.jobsList,
            filterList: state.filterList,
            filterAdded,
            allFiltersRemoved,
            filterRemoved,
            filterNew,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};
