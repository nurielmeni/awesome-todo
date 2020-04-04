<template>
  <q-item
    @click="updateTask({id:id, task:{completed: !task.completed}})"
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough' : task.completed}">{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section side center v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center q-mr-sm">
          <q-icon name="event" size="sm" />
        </div>
        <div class="column justify-center">
          <q-item-label caption class="row justify-end">{{ task.dueDate }}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="editTask(id)"
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click="showEditTask = true"
        />
        <q-btn @click.stop="promptToDelete(id)" flat round dense color="red" icon="delete" />
        <q-dialog v-model="showEditTask">
          <edit-task @closeDialog="showEditTask = false" :task="task" :id="id"></edit-task>
        </q-dialog>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
/*      
    @click="updateTask({id:id, task:{completed: !task.completed}})"   
    @click="toggleCompleted(id)"
*/

import { mapActions } from "vuex";
import EditTask from "./Modals/EditTask.vue";

export default {
  components: {
    EditTask
  },
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["toggleCompleted", "updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to turn on the wifi?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    editTask(id) {}
  }
};
</script>

<style lang="scss" scoped>
</style>