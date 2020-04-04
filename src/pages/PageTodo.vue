<template>
  <q-page padding>
    <q-list separator bordered v-if="Object.keys(tasksTodo).length">
      <Task v-for="(task, key) in tasksTodo" :task="task" :id="key" :key="key"></Task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" icon="add" size="lg" />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @closeDialog="showAddTask = false"></AddTask>
    </q-dialog>
  </q-page>
</template>

<script>
import Task from "../components/Task.vue";
import AddTask from "../components/Modals/AddTask.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    Task,
    AddTask
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  }
};
</script>
