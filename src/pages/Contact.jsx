import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[8px] text-[#A67B5B] mb-4">
            Contact UNDERCUT
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2C2C2C] mb-6">
            Visit UNDERCUT
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Luxury Grooming & Beauty Experience. Book your appointment,
            contact our team, or visit our salon for premium beauty,
            styling and grooming services.
          </p>

        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#F8F5F0] p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition">
              <FaPhoneAlt className="mx-auto text-3xl text-[#6F4E37] mb-4" />
              <h3 className="font-bold text-xl mb-2 text-[#2C2C2C]">
                Call Us
              </h3>

              <a
                href="tel:+919353145785"
                className="text-gray-600 hover:text-[#6F4E37]"
              >
                +91 9353145785
              </a>
            </div>

            <div className="bg-[#F8F5F0] p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition">
              <FaEnvelope className="mx-auto text-3xl text-[#6F4E37] mb-4" />
              <h3 className="font-bold text-xl mb-2 text-[#2C2C2C]">
                Email
              </h3>

              <p className="text-gray-600">
                info@undercutsalon.com
              </p>
            </div>

            <div className="bg-[#F8F5F0] p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition">
              <FaWhatsapp className="mx-auto text-3xl text-[#6F4E37] mb-4" />

              <h3 className="font-bold text-xl mb-2 text-[#2C2C2C]">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/919353145785"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F4E37] font-semibold hover:underline"
              >
                Chat With Us
              </a>
            </div>

            <div className="bg-[#F8F5F0] p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition">
              <FaClock className="mx-auto text-3xl text-[#6F4E37] mb-4" />

              <h3 className="font-bold text-xl mb-2 text-[#2C2C2C]">
                Working Hours
              </h3>

              <p className="text-gray-600">
                7:00 AM – 9:00 PM
              </p>
            </div>

          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">

            <a
              href="https://wa.me/919353145785"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              gap-3
              bg-green-500
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              shadow-lg
              hover:scale-105
              transition
              "
            >
              <FaWhatsapp />
              Book via WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* Contact Form + Map */}
      <section className="bg-[#F8F5F0] py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#FFFDF8] to-[#F3E9DC] p-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-bold text-[#6F4E37] mb-6">
              Send Us A Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-[#D9C7B0] outline-none focus:border-[#6F4E37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-[#D9C7B0] outline-none focus:border-[#6F4E37]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-[#D9C7B0] outline-none focus:border-[#6F4E37]"
              />

              <select
                className="w-full p-4 rounded-xl border border-[#D9C7B0] outline-none focus:border-[#6F4E37]"
              >
                <option>Select Service</option>
                <option>Hair Cut</option>
                <option>Hair Styling</option>
                <option>Hair Spa</option>
                <option>Hair Coloring</option>
                <option>Facial</option>
                <option>Bridal Makeup</option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-[#D9C7B0] outline-none focus:border-[#6F4E37]"
              />

              <button
                className="
                w-full
                py-4
                bg-[#6F4E37]
                text-white
                rounded-xl
                font-semibold
                hover:bg-[#8B5E3C]
                transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Location Section */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-bold text-[#6F4E37] mb-6">
              Visit Our Salon
            </h2>

            <div className="flex items-start gap-4 mb-6">

              <FaMapMarkerAlt className="text-[#6F4E37] text-2xl mt-1" />

              <p className="text-gray-600 leading-relaxed">
                85, 3rd Main Rd,
                <br />
                Muneshwara Block,
                <br />
                Mahalakshmipuram Layout,
                <br />
                Nagapura,
                <br />
                Bengaluru, Karnataka - 560086
              </p>

            </div>

            <iframe
              title="UNDERCUT Salon Location"
              src="https://www.google.com/maps?q=85,3rd%20Main%20Rd,Muneshwara%20Block,Mahalakshmipuram%20Layout,Nagapura,Bengaluru&output=embed"
              className="w-full h-[450px] rounded-2xl border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;