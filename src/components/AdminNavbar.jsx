import { useNavigate, useLocation } from "react-router-dom";
import {
  FaSignOutAlt,
  FaTachometerAlt,
  FaHome,
} from "react-icons/fa";

function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/admin/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#6F4E37] shadow-lg z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="cursor-pointer"
        >
          <h1 className="text-white text-3xl font-bold tracking-wider">
            UNDERCUT
          </h1>

          <p className="text-[#F5E6D3] text-xs tracking-[4px]">
            ADMIN PANEL
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FaHome />
            Website
          </button>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className={`flex items-center gap-2 transition ${
              location.pathname === "/admin/dashboard"
                ? "text-yellow-300"
                : "text-white hover:text-yellow-300"
            }`}
          >
            <FaTachometerAlt />
            Dashboard
          </button>

        </div>

        {/* Admin Info + Logout */}
        <div className="flex items-center gap-4">

          <div className="hidden md:block text-right">
            <p className="text-white text-sm">
              Welcome
            </p>

            <p className="text-yellow-300 font-semibold">
              Admin
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            transition
            duration-300
            shadow-md
            "
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default AdminNavbar;