import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
return (
<>
<Navbar />
<Hero />
<Services />
<WhyChooseUs />
<Gallery />
<Testimonials />
<Footer />
</>
);
}

export default Home;