import {
FaUsers,
FaAward,
FaSpa,
FaHeart,
} from "react-icons/fa";

function WhyChooseUs() {
const features = [
{
icon: <FaUsers size={35} />,
title: "5000+ Happy Clients",
description:
"Trusted by thousands of satisfied clients for beauty and grooming services.",
},
{
icon: <FaAward size={35} />,
title: "10+ Years Experience",
description:
"Experienced professionals delivering modern styles and premium care.",
},
{
icon: <FaSpa size={35} />,
title: "Premium Products",
description:
"We use high-quality salon products for healthy hair and skin.",
},
{
icon: <FaHeart size={35} />,
title: "Personalized Care",
description:
"Every client receives customized treatments and styling solutions.",
},
];

return ( <section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-[#A67B5B] text-sm mb-3">
        Why Choose Us
      </p>

      <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">
        Experience Beauty With Confidence
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        At UNDERCUT, we combine creativity, expertise and premium care
        to provide an exceptional salon experience for every client.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {features.map((feature, index) => (
        <div
          key={index}
          className="
          bg-[#F8F5F0]
          p-8
          rounded-3xl
          text-center
          border
          border-[#E8E1D9]
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
          "
        >

          <div
            className="
            w-16
            h-16
            mx-auto
            mb-6
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            text-[#6F4E37]
            shadow-sm
            "
          >
            {feature.icon}
          </div>

          <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
            {feature.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>


);
}

export default WhyChooseUs;
