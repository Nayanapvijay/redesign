const Contact = () => {
  return (
    <section className="pt-28 pb-20 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-primary text-center">
        Contact Us
      </h1>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        {/* LEFT: CONTACT INFO */}
        <div>
          <h3 className="font-heading text-xl font-semibold">Get in Touch</h3>
          <p className="mt-4 font-body text-dark">
            Have a project or training enquiry? We would love to hear from you.
          </p>

          <div className="mt-6 space-y-2 font-body">
            <p>Email: info@hxindia.com</p>
            <p>Phone: +91 0000000000</p>
            <p>Location: Your address goes here</p>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md px-4 py-3 focus:outline-primary"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-3 focus:outline-primary"
          />

          <textarea
            placeholder="Message"
            className="w-full border rounded-md px-4 py-3 h-32 focus:outline-primary"
          />

          <button className="bg-primary text-white w-full py-3 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
