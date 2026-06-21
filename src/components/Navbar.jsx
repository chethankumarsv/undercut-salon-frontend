import { Link } from "react-router-dom";

function Navbar() {
return ( <nav
   className="
   fixed
   top-0
   left-0
   right-0
   z-50
   bg-[#F8F5F0]/90
   backdrop-blur-md
   border-b
   border-[#E5DDD5]
   shadow-sm
   "
 > <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

    {/* Logo */}
    <Link to="/">
     <h1
  className="
  text-2xl
  md:text-3xl
  font-bold
  tracking-[6px]
  text-[#6F4E37]
  hover:text-[#A67B5B]
  transition
  "
>
  UNDERCUT
</h1>
    </Link>

    {/* Menu */}
    <div className="flex items-center gap-8 font-medium">

      <Link
        to="/"
        className="
        text-[#333333]
        hover:text-[#6F4E37]
        transition
        "
      >
        Home
      </Link>

      <Link
        to="/about"
        className="
        text-[#333333]
        hover:text-[#6F4E37]
        transition
        "
      >
        About
      </Link>

      <Link
        to="/booking"
        className="
        text-[#333333]
        hover:text-[#6F4E37]
        transition
        "
      >
        Booking
      </Link>

      <Link
        to="/contact"
        className="
        text-[#333333]
        hover:text-[#6F4E37]
        transition
        "
      >
        Contact
      </Link>

      <Link
        to="/booking"
        className="
        bg-[#6F4E37]
        text-white
        px-5
        py-2.5
        rounded-full
        hover:bg-[#A67B5B]
        transition
        "
      >
        Book Now
      </Link>

    </div>
  </div>
</nav>


);
}

export default Navbar;
