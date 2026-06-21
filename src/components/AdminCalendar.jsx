
import React from "react";
import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function AdminCalendar({ bookings }) {
  const events = bookings.map((booking) => ({
    title: `${booking.fullName} - ${booking.service}`,
    start: new Date(
      `${booking.appointmentDate}T${booking.appointmentTime}`
    ),
    end: new Date(
      `${booking.appointmentDate}T${booking.appointmentTime}`
    ),
    resource: booking,
  }));

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#2C2C2C]">
          Appointment Calendar
        </h2>

        <p className="text-gray-500">
          View all salon appointments by day, week, or month.
        </p>
      </div>

      <div style={{ height: "700px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          popup
          views={[
            "month",
            "week",
            "day",
            "agenda",
          ]}
          defaultView="month"
          onSelectEvent={(event) => {
            alert(
              `
Customer: ${event.resource.fullName}

Phone: ${event.resource.phone}

Service: ${event.resource.service}

Date: ${event.resource.appointmentDate}

Time: ${event.resource.appointmentTime}

Status: ${event.resource.status}
              `
            );
          }}
        />
      </div>

    </div>
  );
}

export default AdminCalendar;

