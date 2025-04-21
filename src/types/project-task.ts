export type ProjectTask = {
  id: number;
  title: string;
  description?: string;
  status: "PENDING" | "IN_PROGRESS" | "BLOCKED" | "DONE";
  isCompleted: boolean;
  dueDate?: Date;
  projectId: number;
  assignedToId?: number | null;
  createdAt: Date;
  updatedAt: Date;
};
