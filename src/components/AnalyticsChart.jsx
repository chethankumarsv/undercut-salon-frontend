
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsChart({ bookings }) {
  const pending = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  const confirmed = bookings.filter(
    (b) => b.status === "Confirmed"
  ).length;

  const completed = bookings.filter(
    (b) => b.status === "Completed"
  ).length;

  const data = {
    labels: [
      "Pending",
      "Confirmed",
      "Completed",
    ],
    datasets: [
      {
        data: [
          pending,
          confirmed,
          completed,
        ],
        backgroundColor: [
          "#f59e0b",
          "#3b82f6",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Booking Analytics
      </h2>

      <div className="max-w-md mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default AnalyticsChart;

