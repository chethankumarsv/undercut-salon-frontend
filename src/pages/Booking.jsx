import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCut } from "react-icons/fa";
import BookingSuccessModal from "../components/BookingSuccessModal";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    service: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
const [showModal, setShowModal] = useState(false);
const [bookingData, setBookingData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     const response = await axios.post(
  "https://undercut-salon-backend.onrender.com/api/bookings",
  formData
);

setBookingData(response.data.booking);
setShowModal(true);

setMessage("");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        service: "",
        appointmentDate: "",
        appointmentTime: "",
        notes: "",
      });

    } catch (error) {
      setMessage("❌ Failed to book appointment");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F5F0] pt-40 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">

            <div className="flex justify-center mb-4">
              <FaCut className="text-[#6F4E37] text-5xl" />
            </div>

            <p className="uppercase tracking-[6px] text-[#A67B5B] mb-3">
              UNDERCUT UNISEX SALON
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-4">
              Book Your Appointment
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Schedule your salon visit with our expert stylists and
              beauty professionals.
            </p>

          </div>

          {/* Message */}
          {message && (
            <div className="mb-6 bg-white border border-[#D9C7B0] p-4 rounded-xl text-center">
              {message}
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#E7D8C9] p-8 md:p-12">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
              >
                <option value="">Select Service</option>
                <option>Hair Cut</option>
                <option>Hair Styling</option>
                <option>Hair Spa</option>
                <option>Hair Coloring</option>
                <option>Keratin Treatment</option>
                <option>Smoothening</option>
                <option>Facial</option>
                <option>Manicure</option>
                <option>Pedicure</option>
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>Beard Styling</option>
              </select>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                />

                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
                />

              </div>

              <textarea
                rows="5"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional Notes"
                className="w-full p-4 rounded-xl border border-[#D9C7B0] focus:outline-none focus:border-[#6F4E37]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#6F4E37] text-white font-bold hover:bg-[#8B5E3C] transition"
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>

            </form>

          </div>

        </div>

      </section>
<BookingSuccessModal
  isOpen={showModal}
  booking={bookingData}
  onClose={() => setShowModal(false)}
/>
      <Footer />
    </>
  );
}

export default Booking;