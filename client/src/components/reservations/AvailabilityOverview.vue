<template>
  <v-card>
    <v-card-title>
      {{ dayOfAvailability }} availability
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="availability"
      :search="search"
      dense
    />
  </v-card>
</template>

<script>
export default {
  name: 'AvailabilityOverview',

  props: {
    headers: {
      type: Array[{}],
      default: []
    },
    availability: {
      type: Array[{}],
      default: []
    },
    dayOfAvailability: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      search: '',
    };
  },
};
</script>

<style>

</style>
