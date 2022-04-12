export type IJobsList = {
   id: number;
   company: string;
   new: boolean;
   featured: boolean;
   position: string;
   role: string;
   level: string;
   postedAt: string;
   contract: string;
   location: string;
   languages: string[];
   tools: string[];
};

export type Context = {
   filterList: [];
   jobsList: IJobsList[];

   filterAdded: (data: IJobsList) => void;
   allFiltersRemoved: () => void;
   filterRemoved: (data: IJobsList) => void;
   filterNew: (data: IJobsList) => void;
};

export type Props = {
   children: React.ReactNode;
};
