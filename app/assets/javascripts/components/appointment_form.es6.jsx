const AppointmentForm = React.createClass({
  handleInputChange: function(e) {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  handleDatetimeChange: function(e) {
    const name = 'appt_time';
    const obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    inputProps = {name: 'appt_time'}
    return (
      <div>
        <h3>Make a new Appointment</h3>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleInputChange} />
          <Datetime open={true} input={false}
            inputProps={inputProps}
            onChange={this.handleDatetimeChange}/>
          <input type='submit' value='Make Appointment' className='submit-button'/>
        </form>
      </div>
    )
  }
});
