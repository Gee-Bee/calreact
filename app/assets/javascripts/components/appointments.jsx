var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Appointments</h2>
        <AppointmentForm />
        <AppointmentList appointments={this.props.appointments}/>
      </div>
    )
  }
});
