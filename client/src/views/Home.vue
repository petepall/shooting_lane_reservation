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
          >
          <div class="text-center mt-8">
            <v-card :elevation="3">
              <v-card-text>
                <h1>
                  Welcome to our online lane reservation system
                </h1>
              </v-card-text>
            </v-card>
          </div>
          <div>
            <p class="text-md-body-1 mt-3">
              Via this site you can make a reservation at the club for a shooting
              lane. <br>
              Once you are signed-in, you are able to see what lanes are available and
              you can book a lane.
            </p>
          </div>
          <div>
            <h2 class="font-weight-bold mt-5">
              SIGN-UP
            </h2>
            <p class="text-md-body-1 mt-3">
              If this is your first time here, click the
              <span class="font-weight-bold error--text">"Signup"</span> link to create an account.
            </p>
            <img
              src="../assets/Singup.png"
              alt="Signup logo"
              class="mt-1"
            >
          </div>
          <div>
            <h2 class="font-weight-bold mt-5">
              Overview of available time slots
            </h2>
            <p class="text-md-body-1 mt-3">
              Show available timeslots per day/range/lane.
            </p>
            <img
              src="../assets/Availability.svg"
              alt="Availability picture"
              class="mt-1"
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
  }),

  computed: {

  },

  head: {
    title() {
      return {
        inner: 'Home'
      };
    },
  },
};
</script>

<style lang="scss" scoped>

.home {
  width: 100%;

  img.headerPicture {
    display: block;
    max-width: 100%;
    height:auto;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 10px 10px 10px 1px grey;
  }
}

</style>
