import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { IJobsList } from '../../utils';
import JobFilterNew from './JobFilterNew';
import JobsCard from './JobsCard';

const invoidcesVariants = {
   list: index => {
      return {
         hidden: {
            y: 10,
            opacity: 0,
         },
         visible: {
            y: 0,
            opacity: 1,
            transition: {
               type: 'spring',
               delay: 0.1 * index,
            },
         },
         exit: {
            y: 10,
            opacity: 0,
            transition: {
               type: 'spring',
               delay: 0.05 * index,
               duration: 0.45,
            },
         },
      };
   },
   reduced: {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: { duration: 0.5, delay: 0.1 },
      },
      exit: {
         opacity: 0,
      },
   },
};

const Jobs = (): JSX.Element => {
   const { jobsList, filterList } = useContext(GlobalContext);

   const variant = (element: string, index: number) => {
      return invoidcesVariants[element](index);
   };

   const filteredJobs = (jobsArr: IJobsList[], filtersArr: IJobsList[]) => {
      if (filtersArr.length === 0) {
         return jobsArr;
      }

      const matchJob = (filter: IJobsList, job: any) =>
         filter === job.new ||
         filter === job.role ||
         filter === job.level ||
         job.languages.includes(filter) ||
         job.tools?.includes(filter);

      const filteredJobs = jobsArr.filter(job => {
         let isMatch = true;

         filtersArr.forEach(filter => {
            if (!matchJob(filter, job)) {
               isMatch = false;
            }
         });
         return isMatch;
      });

      return filteredJobs;
   };

   const renderedJobs = filteredJobs(jobsList, filterList).map((job, index) => {
      return (
         <JobsCard
            variants={variant('list', index)}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={job.id}
            job={job}
         >
            <JobFilterNew filter={job.new} />
         </JobsCard>
      );
   });

   return <div>{renderedJobs}</div>;
};

export default Jobs;
