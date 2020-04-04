<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.addEventListener("resize", () => {
      this.$store.commit("SET_WINDOW_WIDTH");
    });
  }
};
</script>

<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>