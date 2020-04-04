export function setTasks({ commit }, payload) {
  const tasks = [
    {
      id: 1,
      name: "Go to shop",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30"
    },
    {
      id: 2,
      name: "Buy a book",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30"
    },
    {
      id: 3,
      name: "Read the book",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30"
    }
  ];
  commit("setTasks", tasks);
}

export function removeTask({ commit }, payload) {
  commit("removeTask", payload);
}

export function addTask({ commit }, payload) {
  commit("addTask", payload);
}
