const AppointmentList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id}/>
      )
    })}
  </div>
