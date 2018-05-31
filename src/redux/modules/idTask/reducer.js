const idTask = (state = {}, action) => {
  switch (action.type) {
    case "GET_ID":
      return {...state, id: action.id};

    default:
      return state;
  }
};

export default idTask;
