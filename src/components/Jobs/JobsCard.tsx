import JobsButtonList from './JobsButtonList';
import { motion } from 'framer-motion';

const JobsCard = ({
   job,
   children,
   variants,
   initial,
   animate,
   exit,
}): JSX.Element => {
   return (
      <motion.div
         variants={variants}
         initial={initial}
         animate={animate}
         exit={exit}
         key={job.id}
      >
         <div>
            <div>
               <div>{job.company}</div>
               {job.new && children}
               {job.featured && <div>featured</div>}
            </div>
            <div>
               <a href="/">{job.position}</a>
            </div>
            <div>
               <h2>{job.postedAt}</h2>
               <h2>{job.contract}</h2>
               <h2>{job.location}</h2>
            </div>
         </div>
         <JobsButtonList job={job} />
      </motion.div>
   );
};

export default JobsCard;
