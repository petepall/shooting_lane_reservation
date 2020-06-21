<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        rounded
        active-class="grey--text text--darken-4"
      >
        <v-list-item :to="'/'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item :to="'/about'">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: { value: { type: Boolean } },
  data() {
    return {
      drawer: false,
      group: 1

    };
  }
};
</script>
