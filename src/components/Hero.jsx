import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
return (
<section
className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden"
style={{
backgroundImage: `url(${heroImage})`,
backgroundSize: "cover",
backgroundPosition: "center",
}}
>
{/* Overlay */} <div className="absolute inset-0 bg-[#F8F5F0]/70"></div>

```
  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        uppercase
        tracking-[10px]
        text-[#A67B5B]
        text-sm
        md:text-base
        font-medium
        mb-5
      "
    >
      Premium Unisex Salon
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        text-6xl
        md:text-8xl
        font-extrabold
        text-[#2C2C2C]
        leading-none
        mb-4
      "
    >
      UNDERCUT
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="
        text-2xl
        md:text-4xl
        font-semibold
        text-[#6F4E37]
        mb-6
      "
    >
      Beauty • Style • Confidence
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="
        max-w-3xl
        mx-auto
        text-lg
        md:text-xl
        text-gray-700
        leading-relaxed
      "
    >
      Experience premium hair styling, beauty treatments,
      bridal makeup, spa services, hair coloring and expert
      grooming designed to bring out your most confident self.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="
        mt-10
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-5
      "
    >
      <Link to="/booking">
        <button
          className="
            px-10
            py-4
            rounded-full
            font-semibold
            text-white
            bg-gradient-to-r
            from-[#6F4E37]
            to-[#A67B5B]
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Book Appointment
        </button>
      </Link>

      <a href="#services">
        <button
          className="
            px-10
            py-4
            rounded-full
            border-2
            border-[#6F4E37]
            text-[#6F4E37]
            font-semibold
            hover:bg-[#6F4E37]
            hover:text-white
            transition-all
            duration-300
          "
        >
          View Services
        </button>
      </a>
    </motion.div>

  </div>
</section>


);
}

export default Hero;
