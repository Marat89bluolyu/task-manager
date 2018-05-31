let nextTaskId = 0;

export const addTask = payload => ({
  type: "ADD_TASK",
  id: nextTaskId++,
  taskName: payload.taskName,
  description: payload.description,
  createdAt: payload.createdAt,
  priority: payload.priority,
  plannedTime: payload.plannedTime,
  completedTime: payload.completedTime,
  completedStatus: payload.completedStatus
});
