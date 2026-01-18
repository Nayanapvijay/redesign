import aquaImage from "../assets/aquaculture-300x300.jpg";
import aquaImage1 from "../assets/automatic-pool-cleaners-300x300.jpg";
import aquaImage2 from "../assets/automation-300x300.jpg";

const ProjectsPreview = () => {
  const images = [aquaImage, aquaImage1, aquaImage2];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-primary">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={`product-${idx}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
