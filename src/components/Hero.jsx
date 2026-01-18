import { Link } from "react-router-dom";
import heroImage from "../assets/beautiful-luxury-hotel-swimming-pool-resort-with-umbrella-chair.jpg";

const Hero = () => {
  return (
    <section
      className="pt-28 pb-32 bg-cover bg-center bg-no-repeat text-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Engineering Excellence for Industrial Growth
        </h1>
        <p className="mt-4 text-lg text-gray-200 font-body max-w-2xl mx-auto">
          Delivering turnkey infrastructure, electrical contracting solutions,
          and workforce training for tomorrow’s industries.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/services"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="border border-white text-white px-6 py-3 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
