<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      autofocus
      outlined
      @input="$emit('update:name', $event)"
      :value="name"
      label="Task Name"
      class="col"
      :rules="[val => !!val || 'Field is required']"
    />
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style lang="scss" scoped>
</style>