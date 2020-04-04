<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitAddTask" ref="addTaskForm">
      <q-card-section class="q-pt-none">
        <name-field :name.sync="taskToAdd.name" />
        <due-date-field :dueDate.sync="taskToAdd.dueDate" />
        <due-time-field v-if="taskToAdd.dueDate" :dueTime.sync="taskToAdd.dueTime" />
      </q-card-section>
      <modal-actions />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalHeader from "./shared/ModalHeader.vue";
import NameField from "./shared/NameField.vue";
import DueDateField from "./shared/DueDateField.vue";
import DueTimeField from "./shared/DueTimeField.vue";
import ModalActions from "./shared/ModalActions.vue";
export default {
  components: {
    ModalHeader,
    NameField,
    DueDateField,
    DueTimeField,
    ModalActions
  },
  data() {
    return {
      taskToAdd: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitAddTask() {
      this.addTask(this.taskToAdd);
      this.$emit("closeDialog");
    }
  },
  watch: {
    "taskToAdd.dueDate"(val) {
      if (!val) {
        this.taskToAdd.dueTime = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>