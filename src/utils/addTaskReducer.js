export const taskReducer = (state, action) => {
  switch (action.type) {
    case "change_state":
      return { ...action.value };
    case "change_title":
      return { ...state, title: action.value };
    case "change_description":
      return { ...state, description: action.value };
    case "change_list":
      return { ...state, list: action.value };
    case "change_date":
      return { ...state, target_date: action.value };
    case "add_subtask":
      return {
        ...state,
        subtasks: [...state.subtasks, { done: false, title: action.value }],
      };
    case "check_subtask":
      const changed = JSON.parse(JSON.stringify(state));
      changed.subtasks[action.key].done = action.value;
      console.log(state);
      return changed;
    default:
      return state;
  }
};
