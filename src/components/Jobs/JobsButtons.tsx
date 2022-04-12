import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const JobsButtons = ({ filter }): JSX.Element => {
   const { filterList, filterAdded, filterRemoved } = useContext(GlobalContext);
   const [isSelected, setIsSelected] = useState(false);

   useEffect(() => {
      if (filterList.includes(filter as never)) setIsSelected(true);
      else setIsSelected(false);
   }, [filterList, filter]);

   const onFilterClicked = (filter: any) => {
      if (filterList.includes(filter as never)) return;

      if (isSelected) filterRemoved(filter);
      else filterAdded(filter);
   };

   return (
      <button onClick={() => onFilterClicked(filter)} aria-pressed={isSelected}>
         {filter}
      </button>
   );
};
