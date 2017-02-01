class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order(:appt_time)
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = Appointment.order(:appt_time)
  end

  protected

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
