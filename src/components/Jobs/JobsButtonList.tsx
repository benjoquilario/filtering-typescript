import { IJobsList } from '../../utils';
import { JobsButtons } from './JobsButtons';

type IJobButtonList = {
   job: IJobsList;
};

const JobsButtonList = ({ job }: IJobButtonList): JSX.Element => {
   return (
      <div>
         <JobsButtons filter={job.role} />
         <JobsButtons filter={job.level} />
         {job.languages.map(language => (
            <JobsButtons filter={language} />
         ))}
         {job.tools && job.tools.map(tool => <JobsButtons filter={tool} />)}
      </div>
   );
};

export default JobsButtonList;
