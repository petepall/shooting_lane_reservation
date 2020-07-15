<template>
  <v-container fluid>
    <v-row fluid>
      <v-col
        xs="12"
        sm="10"
        offset-sm="1"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <div class="home">
          <img
            src="../assets/reservation.jpg"
            alt="Reservation"
            class="headerPicture"
          />
          <div class="text-center mt-8">
            <v-card :elevation="3">
              <v-card-text>
                <h1
                  class="text-xs-h4 text-sm-h4 text-md-h4 text-lg-h4"
                >Welcome to our online lane reservation system</h1>
              </v-card-text>
            </v-card>
          </div>
          <div>
            <p class="text-md-body-1 mt-3">
              Via this site you can make a reservation at the club for a shooting
              lane.
              <br />Once you are signed-in, you are able to see what lanes are available and
              you can book a lane.
            </p>
          </div>
          <div>
            <h2 class="font-weight-bold mt-5">SIGN-UP</h2>
            <p class="text-md-body-1 mt-3">
              If this is your first time here, click the
              <span
                class="font-weight-bold error--text"
              >"Signup"</span> link to create an account.
            </p>
            <router-link to="/signup">
              <img
                src="../assets/Singup.png"
                alt="Signup logo"
                class="mt-1 signup"
              />
            </router-link>
          </div>
          <div>
            <h2 class="font-weight-bold mt-5">Overview of available time slots</h2>
            <p class="text-md-body-1 mt-3">Available timeslots per day/range/lane.</p>

            <AvailabilityOverview
              v-for="(value, name, index) in availability"
              :key="index"
              :headers="headers"
              :availability="value.rangeAvailablity"
              :day-of-availability="value.dayOfAvailability"
              class="mb-4"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  components: {
    AvailabilityOverview: () =>
      import('@/components/reservations/AvailabilityOverview.vue'),
  },

  data: () => ({
    headers: [
      {
        text: 'Hours/Ranges',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '10 meter', value: 'range10M' },
      { text: '25 meter', value: 'range25M' },
      { text: '30 meter', value: 'range30M' },
      { text: '50 meter', value: 'range50m' },
      { text: '100 meter', value: 'range100m' },
    ],

    availability: [
      {
        dayOfAvailability: 'Wednesday',
        rangeAvailablity: [
          {
            name: '18 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '19 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '20 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '21 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '22 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '23 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
        ],
      },
      {
        dayOfAvailability: 'Thursday',
        rangeAvailablity: [
          {
            name: '18 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '19 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '20 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '21 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '22 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '23 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
        ],
      },
      {
        dayOfAvailability: 'Friday',
        rangeAvailablity: [
          {
            name: '15 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '16 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '17 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '18 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '19 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '20 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '21 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '22 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '23 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
        ],
      },
      {
        dayOfAvailability: 'Saturday',
        rangeAvailablity: [
          {
            name: '9 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '10 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '11 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '14 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '15 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '16 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '17 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '18 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '19 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '20 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '21 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '22 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '23 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
        ],
      },
      {
        dayOfAvailability: 'Sunday',
        rangeAvailablity: [
          {
            name: '14 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '15 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '16 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '17 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '18 uur',
            range10M: 1,
            range25M: 1,
            range30M: 1,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '19 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '20 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '21 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '22 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
          {
            name: '23 uur',
            range10M: 5,
            range25M: 5,
            range30M: 5,
            range50m: 3,
            range100m: 4,
          },
        ],
      },
    ],
  }),

  head: {
    title() {
      return {
        inner: 'Home',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  img.headerPicture,
  img.signup {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 10px 10px 10px 1px grey;
  }
}
</style>
