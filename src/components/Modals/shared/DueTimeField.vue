<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      outlined
      :value="dueTime"
      @input="$emit('update:dueTime', $event)"
      label="Due Time"
      class="col"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale" ref="qTimeProxy">
            <q-time :value="dueTime" @input="updateInput" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueTime"],
  methods: {
    updateInput(event) {
      this.$refs.qTimeProxy.hide();
      this.$emit("update:dueTime", event);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>