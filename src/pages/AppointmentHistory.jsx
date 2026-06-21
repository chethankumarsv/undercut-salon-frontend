
import { useState } from "react";
import axios from "axios";

function AppointmentHistory() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const searchBookings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/bookings/customer/${email}`
      );

      setBookings(res.data.bookings);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] p-10">

      <h1 className="text-4xl font-bold mb-6">
        Appointment History
      </h1>

      <div className="flex gap-4 mb-8">

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-3 rounded-lg w-full"
        />

        <button
          onClick={searchBookings}
          className="bg-[#6F4E37] text-white px-6 rounded-lg"
        >
          Search
        </button>

      </div>

      <div className="space-y-4">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="bg-white p-5 rounded-xl shadow"
          >

            <h3 className="font-bold text-xl">
              {booking.service}
            </h3>

            <p>
              {booking.appointmentDate}
            </p>

            <p>
              {booking.appointmentTime}
            </p>

            <p>
              Status: {booking.status}
            </p>

            <button
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
            >
              Rebook
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AppointmentHistory;

