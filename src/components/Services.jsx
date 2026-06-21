import {
FaCut,
FaSpa,
FaPaintBrush,
FaGem,
FaUserTie,
FaMagic,
} from "react-icons/fa";

function Services() {
const services = [
{
title: "Hair Cut",
icon: <FaCut size={38} />,
description: "Modern, classic and trending haircuts tailored to your style.",
price: "Starting ₹199",
},
{
title: "Hair Styling",
icon: <FaUserTie size={38} />,
description: "Professional styling for parties, events and daily elegance.",
price: "Starting ₹299",
},
{
title: "Hair Spa",
icon: <FaSpa size={38} />,
description: "Deep nourishment and rejuvenation for healthy, shiny hair.",
price: "Starting ₹499",
},
{
title: "Hair Coloring",
icon: <FaPaintBrush size={38} />,
description: "Premium coloring, highlights and fashion shades.",
price: "Starting ₹799",
},
{
title: "Facial & Skin Care",
icon: <FaGem size={38} />,
description: "Glow-enhancing facials and advanced skincare treatments.",
price: "Starting ₹599",
},
{
title: "Bridal Makeup",
icon: <FaMagic size={38} />,
description: "Complete bridal beauty packages for your special day.",
price: "Starting ₹4999",
},
];

return ( <section
   id="services"
   className="bg-[#F8F5F0] py-24"
 > <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-[#A67B5B] text-sm mb-3">
        Premium Services
      </p>

      <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">
        Our Services
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        Discover luxury beauty and grooming services designed
        to enhance your confidence, style and personality.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {services.map((service, index) => (
        <div
          key={index}
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-md
          border
          border-[#E8E1D9]
          hover:-translate-y-3
          hover:shadow-xl
          transition-all
          duration-300
          "
        >
          <div
            className="
            w-16
            h-16
            rounded-full
            bg-[#F8F5F0]
            flex
            items-center
            justify-center
            text-[#6F4E37]
            mb-6
            "
          >
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5">
            {service.description}
          </p>

          <div className="flex justify-between items-center">

            <span className="font-semibold text-[#6F4E37]">
              {service.price}
            </span>

            <button
              className="
              px-4
              py-2
              rounded-full
              bg-[#6F4E37]
              text-white
              text-sm
              hover:bg-[#A67B5B]
              transition
              "
            >
              Book Now
            </button>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>


);
}

export default Services;
