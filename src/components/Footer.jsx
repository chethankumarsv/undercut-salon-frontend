import {
FaInstagram,
FaFacebookF,
FaWhatsapp,
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
return (
<footer className="bg-[#6F4E37] text-white">
<div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <h2 className="text-4xl font-bold text-[#F8F5F0] mb-4 tracking-wider">
          UNDERCUT
        </h2>

        <p className="text-[#E8DCCB] leading-8">
          Premium Unisex Salon offering modern styling,
          beauty treatments, hair care, bridal makeup,
          spa services and professional grooming for
          men and women.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-[#E8DCCB]">
          <li>
            <Link
              to="/"
              className="hover:text-white transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-white transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/booking"
              className="hover:text-white transition duration-300"
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          Services
        </h3>

        <ul className="space-y-3 text-[#E8DCCB]">
          <li>Hair Cut</li>
          <li>Hair Styling</li>
          <li>Hair Spa</li>
          <li>Hair Coloring</li>
          <li>Facial Care</li>
          <li>Bridal Makeup</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          Contact Us
        </h3>

        <div className="space-y-4 text-[#E8DCCB]">

          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <span>+91 9353145785</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>info@undercutsalon.com</span>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              Your Salon Address,
              <br />
              City, State - PIN
            </span>
          </div>

        </div>
      </div>

    </div>

    {/* Social Icons */}
    <div className="flex justify-center gap-8 mt-12 text-3xl">

      <a
        href="#"
        className="hover:text-[#F8F5F0] hover:scale-110 transition duration-300"
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        className="hover:text-[#F8F5F0] hover:scale-110 transition duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="hover:text-[#F8F5F0] hover:scale-110 transition duration-300"
      >
        <FaWhatsapp />
      </a>

    </div>

    {/* Bottom Line */}
    <div className="border-t border-[#A67B5B] mt-10 pt-6 text-center text-[#E8DCCB]">
      © 2026 UNDERCUT Unisex Salon. All Rights Reserved.
    </div>

  </div>
</footer>

);
}

export default Footer;