<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="submitEditTask" ref="editTaskForm">
      <q-card-section class="q-pt-none">
        <name-field :name.sync="taskToEdit.name" />
        <due-date-field :dueDate.sync="taskToEdit.dueDate" />
        <due-time-field v-if="taskToEdit.dueDate" :dueTime.sync="taskToEdit.dueTime" />
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
  props: {
    task: Object,
    id: String
  },
  data() {
    return {
      taskToEdit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitEditTask() {
      this.updateTask({ task: this.taskToEdit, id: this.id });
      this.$emit("closeDialog");
    }
  },
  watch: {
    "taskToEdit.dueDate"(val) {
      if (!val) {
        this.taskToEdit.dueTime = null;
      }
    }
  },
  mounted() {
    this.taskToEdit = Object.assign({}, this.task);
  }
};
</script>

<style lang="scss" scoped>
</style>