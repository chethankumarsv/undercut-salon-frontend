import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import AdminCalendar from "../components/AdminCalendar";
import AnalyticsChart from "../components/AnalyticsChart";
import {
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings || []);
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/admin/login");
      }

      setBookings([]);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchBookings();

    const interval = setInterval(() => {
      fetchBookings();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchBookings();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchBookings();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredBookings = Array.isArray(bookings)
    ? bookings.filter(
        (booking) =>
          booking.fullName
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          booking.phone
            ?.toString()
            .includes(search) ||
          booking.service
            ?.toLowerCase()
            .includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <AdminNavbar />

      <section className="min-h-screen bg-[#F8F5F0] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <p className="uppercase tracking-[5px] text-[#A67B5B] mb-2">
              UNDERCUT SALON
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Admin Dashboard
            </h1>

            <p className="text-gray-600 mt-3">
              Manage appointments and monitor salon bookings
            </p>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Total Bookings
                </p>

                <h2 className="text-4xl font-bold text-[#6F4E37]">
                  {bookings.length}
                </h2>
              </div>

              <FaCalendarCheck className="text-5xl text-[#A67B5B]" />
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Pending
                </p>

                <h2 className="text-4xl font-bold text-orange-500">
                  {
                    bookings.filter(
                      (b) => b.status === "Pending"
                    ).length
                  }
                </h2>
              </div>

              <FaClock className="text-5xl text-orange-400" />
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Confirmed
                </p>

                <h2 className="text-4xl font-bold text-blue-500">
                  {
                    bookings.filter(
                      (b) => b.status === "Confirmed"
                    ).length
                  }
                </h2>
              </div>

              <FaCheckCircle className="text-5xl text-blue-400" />
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Completed
                </p>

                <h2 className="text-4xl font-bold text-green-500">
                  {
                    bookings.filter(
                      (b) => b.status === "Completed"
                    ).length
                  }
                </h2>
              </div>

              <FaCheckCircle className="text-5xl text-green-400" />
            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
            <div className="flex items-center gap-3">
              <FaSearch className="text-[#6F4E37]" />

              <input
                type="text"
                placeholder="Search customer, phone or service..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-[#6F4E37] text-white px-6 py-4">
              <h2 className="text-2xl font-semibold">
                Appointment Records
              </h2>
            </div>
            <div className="mb-10">
  <AnalyticsChart bookings={bookings} />
</div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-[#F0E6DC]">

                  <tr>

                    <th className="p-4 text-left">
                      Customer
                    </th>

                    <th className="p-4 text-left">
                      Phone
                    </th>

                    <th className="p-4 text-left">
                      Service
                    </th>

                    <th className="p-4 text-left">
                      Date
                    </th>

                    <th className="p-4 text-left">
                      Time
                    </th>

                    <th className="p-4 text-left">
                      Status
                    </th>

                    <th className="p-4 text-center">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredBookings.map((booking) => (

                    <tr
                      key={booking._id}
                      className="border-b hover:bg-[#FCFAF7]"
                    >

                      <td className="p-4">
                        {booking.fullName}
                      </td>

                      <td className="p-4">
                        {booking.phone}
                      </td>

                      <td className="p-4">
                        {booking.service}
                      </td>

                      <td className="p-4">
                        {booking.appointmentDate}
                      </td>

                      <td className="p-4">
                        {booking.appointmentTime}
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            booking.status === "Completed"
                              ? "bg-green-100 text-green-600"
                              : booking.status === "Confirmed"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          {booking.status}
                        </span>

                      </td>

                      <td className="p-4">

                        <div className="flex gap-2 justify-center">

                          <button
                            onClick={() =>
                              updateStatus(
                                booking._id,
                                "Confirmed"
                              )
                            }
                            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                          >
                            Confirm
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(
                                booking._id,
                                "Completed"
                              )
                            }
                            className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600"
                          >
                            Complete
                          </button>

                          <button
                            onClick={() =>
                              deleteBooking(
                                booking._id
                              )
                            }
                            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                  {filteredBookings.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="text-center py-10 text-gray-500"
                      >
                        No bookings found
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>
          {/* Calendar Section */} <div className="mt-10"> <AdminCalendar bookings={bookings} /> </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdminDashboard;