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
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-if="isAuthenticated"
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: { type: Boolean },
    menuItems: {
      type: Array[String],
      default: []
    },
    isAuthenticated: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: false,
      group: 1

    };
  },

  methods: {
    logout() {
      this.$emit('logout');
    }
  }
};
</script>
