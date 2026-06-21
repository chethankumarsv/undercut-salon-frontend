
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function BookingSuccessModal({
  isOpen,
  booking,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">

        <div className="text-center">

          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Booking Confirmed
          </h2>

          <p className="text-gray-500 mb-6">
            Your appointment has been booked successfully.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 text-left space-y-3">

            <p>
              <strong>Name:</strong>{" "}
              {booking?.fullName}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {booking?.phone}
            </p>

            <p>
              <strong>Service:</strong>{" "}
              {booking?.service}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {booking?.appointmentDate}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {booking?.appointmentTime}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {booking?.status}
            </p>

          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-[#6F4E37] text-white py-3 rounded-xl font-semibold hover:bg-[#8B5E3C] transition"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookingSuccessModal;

