var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  render: function() {
    return (
      <div>
        <h2>Appointments</h2>
        <AppointmentForm
          input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput} />
        <AppointmentList appointments={this.state.appointments}/>
      </div>
    )
  }
});
