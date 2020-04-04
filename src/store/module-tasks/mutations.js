export const setTasks = (state, payload) => {
  state.tasks = payload;
};

export const removeTask = (state, payload) => {
  state.tasks = state.tasks.splice(payload, 1);
};

export const addTask = (state, payload) => {
  state.tasks.push(payload);
};
