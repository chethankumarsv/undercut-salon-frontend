import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://undercut-salon-backend.onrender.com/api/admin/login",
        formData
      );

      console.log("Login Response:", res.data);

      if (res.data.token) {
        localStorage.setItem(
          "token",
          res.data.token
        );

        alert("Login Successful");

        navigate("/admin/dashboard");
      } else {
        alert("Token not received from server");
      }

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-[#6F4E37] text-white text-center py-8 px-6">
          <p className="uppercase tracking-[6px] text-sm mb-2">
            UNDERCUT SALON
          </p>

          <h1 className="text-4xl font-bold">
            Admin Login
          </h1>

          <p className="text-[#F8F5F0] mt-3">
            Access Salon Management Dashboard
          </p>
        </div>

        <div className="p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium text-[#2C2C2C]">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@gmail.com"
                required
                className="
                w-full
                p-4
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:border-[#6F4E37]
                transition
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2C2C2C]">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                className="
                w-full
                p-4
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:border-[#6F4E37]
                transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              py-4
              bg-[#6F4E37]
              text-white
              rounded-xl
              font-semibold
              hover:bg-[#8B5E3C]
              transition-all
              duration-300
              disabled:opacity-50
              "
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default AdminLogin;