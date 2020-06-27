# **Building a reservation system for shooting clubs**

The backend of the application is being build using featherjs and mongodb with the mongoose library.
For the front-end the VueJs frameworks is used together with Vuetifyjs and Vuex

### TODO:

_**setup backend**_

- [x] setup feathersjs server folder
- [x] generate the feathersjs app

_**setup front end**_

- [x] setup the client folder
- [x] generate the vue app
- [x] use vuetifyjs
- [x] add feathers-vuex
- [x] add signup to client
- [x] add signin to client

_**Authorization**_

- [x] add local auth to server

_**Master data**_

- [x] User registrations
- [ ] infrastruction definition
  - [ ] Ranges
  - [ ] Lanes
  - [ ] type (paper or electronic)
- [ ] Availability per range (timeslots per date)

_**Reservations**_

- [ ] Make reservation based on:

  - User
  - Date
  - Timeslot
  - Range
  - Lanes

- [ ] The user makes a reservation based on overview of available slots
  - Overview should make clear what slots are still available for reservation
  - Once a user starts making a reservation the slot should not be available to users
- [ ] Availability checking is performed based on date, timelot, range and Lane
- [ ] The reservation should be rejected if another person already reserved the Lane
