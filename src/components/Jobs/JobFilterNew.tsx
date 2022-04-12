import { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const JobFilterNew = ({ filter }) => {
   const { filterNew } = useContext(GlobalContext);
   const text = useRef<HTMLButtonElement>();

   const onFilterClicked = (filter: any) => {
      return filterNew(filter);
   };

   return (
      <button ref={text} onClick={() => onFilterClicked(filter)}>
         New
      </button>
   );
};

export default JobFilterNew;
