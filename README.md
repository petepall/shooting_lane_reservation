# **Building a reservation system for shooting clubs**

### Elements of the system:

_Master data_

    [] User registrations
    [] infrastruction definition
        [] Ranges
        [] Lanes
        [] type (paper or electronic)
    [] Availability per range (timeslots per date)

_Reservations_

    [] Make reservation based on:
        - User
        - Date
        - Timeslot
        - Range
        - Lanes

    [] The user makes a reservation based on overview of available slots
        - Overview should make clear what slots are still available for reservation
        - Once a user starts making a reservation the slot should not be available to users
    [] Availability checking is performed based on date, timelot, range and Lane
    [] The reservation should be rejected if another person already reserved the Lane
