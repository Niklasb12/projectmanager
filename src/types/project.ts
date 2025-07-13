import { Customer } from "./customer";
import { ProjectRole } from "./project-role";
import { Status } from "./status";
import { TimeReport } from "./time-report";
import { ProjectTask } from "./project-task";

export type Project = {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  deadline: Date;
  hourLeft: number;
  projectType: string;
  statusId?: number | null;
  customerId?: number | null;
  status?: Status | null;
  customer?: Customer | null;
  timeReports?: TimeReport[];
  tasks?: ProjectTask[];
  projectRoles?: ProjectRole[];
  createdAt: Date;
  updatedAt: Date;
};
