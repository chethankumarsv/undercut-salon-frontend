import { FaStar } from "react-icons/fa";

function Testimonials() {
const testimonials = [
{
name: "Rahul Sharma",
review:
"Excellent haircut and grooming service. The staff was professional and the salon atmosphere was very welcoming.",
},
{
name: "Priya N",
review:
"Loved the facial and hair spa service. Everything was clean, relaxing and professionally managed.",
},
{
name: "Sneha R",
review:
"Amazing bridal makeup experience. The team understood exactly what I wanted and delivered perfectly.",
},
];

return ( <section className="bg-white py-24">


  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-[#A67B5B] text-sm mb-3">
        Testimonials
      </p>

      <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">
        What Our Clients Say
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        Our clients trust us for quality service,
        professional care and unforgettable salon experiences.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="
          bg-[#F8F5F0]
          rounded-3xl
          p-8
          border
          border-[#E8E1D9]
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-2
          transition-all
          duration-300
          "
        >

          <div className="flex justify-center gap-1 mb-5 text-[#A67B5B]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-600 leading-relaxed text-center mb-6">
            "{testimonial.review}"
          </p>

          <div className="text-center">

            <div
              className="
              w-14
              h-14
              mx-auto
              rounded-full
              bg-[#6F4E37]
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-lg
              mb-3
              "
            >
              {testimonial.name.charAt(0)}
            </div>

            <h4 className="font-bold text-[#2C2C2C]">
              {testimonial.name}
            </h4>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>


);
}

export default Testimonials;
