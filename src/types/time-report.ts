export type TimeReport = {
  id: number;
  date: Date;
  hoursWorked: number;
  part?: string;
  description?: string;
  notes?: string;
  userId: number;
  projectId: number;
  createdAt: Date;
};
