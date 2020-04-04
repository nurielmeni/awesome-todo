<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      outlined
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      label="Due Date"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date :value="dueDate" @input="updateInput" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueDate"],
  methods: {
    updateInput(event) {
      this.$refs.qDateProxy.hide();
      this.$emit("update:dueDate", event);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>