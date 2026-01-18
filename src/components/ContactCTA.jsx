import { Link } from "react-router-dom";
const ContactCTA = () => {
  return (
    <section className="py-16 bg-primary text-dark text-center">
      <h2 className="text-3xl font-heading font-bold">Ready to Collaborate?</h2>
      <p className="mt-2 font-body">
        Partner with HX India for your next project or training requirement.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/contact"
          className="bg-primary text-dark px-6 py-3 rounded-md font-semibold border border-dark"
        >
          Talk to Our Team
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
