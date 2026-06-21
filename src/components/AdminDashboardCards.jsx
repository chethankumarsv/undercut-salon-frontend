
import React from "react";

function AdminDashboardCards({ analytics }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3>Total Bookings</h3>
        <p className="text-3xl font-bold">
          {analytics.totalBookings}
        </p>
      </div>

      <div className="bg-yellow-100 p-6 rounded-xl shadow">
        <h3>Pending</h3>
        <p className="text-3xl font-bold">
          {analytics.pendingBookings}
        </p>
      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow">
        <h3>Confirmed</h3>
        <p className="text-3xl font-bold">
          {analytics.confirmedBookings}
        </p>
      </div>

      <div className="bg-green-100 p-6 rounded-xl shadow">
        <h3>Completed</h3>
        <p className="text-3xl font-bold">
          {analytics.completedBookings}
        </p>
      </div>

    </div>
  );
}

export default AdminDashboardCards;

