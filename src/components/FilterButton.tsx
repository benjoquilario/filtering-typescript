import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';

const Filter = () => {
   const { allFiltersRemoved, filterList, filterRemoved } =
      useContext(GlobalContext);

   const renderedFilters = filterList.map(filter => {
      if (filterList.includes(true as never)) return null;

      return (
         <Button
            text={filter}
            key={filter}
            callback={() => filterRemoved(filter)}
         />
      );
   });

   return (
      <>
         {renderedFilters}
         <Button text="Clear" callback={allFiltersRemoved} />
      </>
   );
};

export default Filter;
