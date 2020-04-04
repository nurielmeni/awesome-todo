<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">Awesome Todo</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="767"
      :width="230"
    >
      <q-list dark>
        <q-item-label header class="text-grey-5">Navigation</q-item-label>

        <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated v-if="windowWidth < 768">
      <q-tabs>
        <q-route-tab
          :key="link.link"
          v-for="link in links"
          :to="link.link"
          exact
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "Layout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      links: [
        {
          title: "Todo",
          caption: "Todo list",
          icon: "list",
          link: "/"
        },
        {
          title: "Settings",
          caption: "Todo Settings",
          icon: "settings",
          link: "/settings"
        }
      ]
    };
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
};
</script>
