import Vue from "vue";

const state = {
  lastId: 4,
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30",
    },
    ID2: {
      name: "Buy a book",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30",
    },
    ID3: {
      name: "Read the book",
      completed: false,
      dueDate: "2020/04/10",
      dueTime: "10:30",
    },
  },
};

const mutations = {
  TOGGLE_COMPLETED(state, payload) {
    state.tasks[payload].completed = !state.tasks[payload].completed;
  },
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.task);
  },
  DELETE_TASK(state, payload) {
    Vue.delete(state.tasks, payload);
  },
  ADD_TASK(state, payload) {
    Vue.set(state.tasks, "ID" + state.lastId++, payload);
  },
};

const actions = {
  toggleCompleted({ commit }, payload) {
    commit("TOGGLE_COMPLETED", payload);
  },
  updateTask({ commit }, payload) {
    commit("UPDATE_TASK", payload);
  },
  deleteTask({ commit }, payload) {
    commit("DELETE_TASK", payload);
  },
  addTask({ commit }, payload) {
    commit("ADD_TASK", payload);
  },
};

const getters = {
  tasksTodo(state) {
    const obj = {};
    for (const key in state.tasks) {
      if (!state.tasks[key].completed) obj[key] = state.tasks[key];
    }
    return obj;
  },
  tasksCompleted(state) {
    const obj = {};
    for (const key in state.tasks) {
      if (state.tasks[key].completed) obj[key] = state.tasks[key];
    }
    return obj;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
