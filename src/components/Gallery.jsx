function Gallery() {
const images = [
{
image:
"https://images.unsplash.com/photo-1560066984-138dadb4c035",
title: "Hair Styling",
},
{
image:
"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
title: "Hair Spa",
},
{
image:
"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
title: "Bridal Makeup",
},
{
image:
"https://images.unsplash.com/photo-1562322140-8baeececf3df",
title: "Hair Coloring",
},
{
image:
"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
title: "Facial Care",
},
{
image:
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
title: "Salon Interior",
},
];

return ( <section className="bg-[#F8F5F0] py-24">


  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-[#A67B5B] text-sm mb-3">
        Our Portfolio
      </p>

      <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">
        Beauty In Every Detail
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        Explore our work and discover the elegance,
        creativity and professionalism that define
        the UNDERCUT salon experience.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {images.map((item, index) => (
        <div
          key={index}
          className="
          group
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-md
          border
          border-[#E8E1D9]
          hover:shadow-xl
          transition-all
          duration-300
          "
        >

          <div className="overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="
              w-full
              h-80
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
            />

          </div>

          <div className="p-6 text-center">

            <h3 className="text-2xl font-bold text-[#2C2C2C]">
              {item.title}
            </h3>

            <div className="w-12 h-1 bg-[#A67B5B] mx-auto mt-3 rounded-full"></div>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>


);
}

export default Gallery;
