import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F4EE] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-[#6F4E37] mb-6">
              About UNDERCUT
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              UNDERCUT is a premium unisex salon dedicated to providing
              exceptional beauty, grooming and wellness services for
              both men and women.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
              alt="Salon"
              className="rounded-3xl shadow-xl"
            />

            <div>
              <h2 className="text-4xl font-bold text-[#6F4E37] mb-6">
                Our Story
              </h2>

              <p className="text-gray-700 mb-4">
                At UNDERCUT, we believe beauty is about confidence.
                Our experienced professionals provide personalized
                styling, hair treatments, skincare, bridal makeup and
                grooming services.
              </p>

              <p className="text-gray-700 mb-4">
                We use premium-quality products and modern techniques
                to ensure every client leaves feeling refreshed,
                confident and stylish.
              </p>

              <p className="text-gray-700">
                Whether it's a haircut, facial, hair spa or bridal
                makeover, we are committed to delivering excellence.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;