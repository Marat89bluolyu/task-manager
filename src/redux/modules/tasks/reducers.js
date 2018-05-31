const task = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        id: action.id,
        taskName: action.taskName,
        description: action.description,
        createdAt: action.createdAt,
        priority: action.priority,
        plannedTime: action.plannedTime,
        completedTime: action.completedTime,
        completedStatus: action.completedStatus
      };
      
    default:
      return state;
  }
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, task(undefined, action)];

    default:
      return state;
  }
};

export default tasks;
