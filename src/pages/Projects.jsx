import aquaImage from "../assets/aquaculture-300x300.jpg";
import aquaImage1 from "../assets/automatic-pool-cleaners-300x300.jpg";
import aquaImage2 from "../assets/automation-300x300.jpg";
import aquaImage3 from "../assets/filter-media-300x300.jpg";
import aquaImage4 from "../assets/heat-pump-150x150@2x.jpg";
import aquaImage5 from "../assets/ladders-rails-300x300.jpg";
import aquaImage6 from "../assets/lighting-300x300.jpg";
import aquaImage7 from "../assets/maintenance-equipment-300x300.jpg";

const Projects = () => {
  const images = [
    aquaImage,
    aquaImage1,
    aquaImage2,
    aquaImage3,
    aquaImage4,
    aquaImage5,
    aquaImage6,
    aquaImage7,
  ];

  return (
    <section className="pt-28 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-primary text-center">
        Products
      </h1>

      <p className="mt-6 text-center font-body text-dark max-w-3xl mx-auto">
        From commercial facilities to industrial power systems, HX India has
        successfully delivered complex projects across multiple sectors.
      </p>

      <div className="mt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-md overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={`product-${idx}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
