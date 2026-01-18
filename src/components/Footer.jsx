import { Link } from "react-router-dom";
import logoImage from "../assets/hx-india-logo-color-white-outline.webp";
const Footer = () => {
  return (
    //<footer className="bg-primaryDark text-white py-10">
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/">
            <img
              src={logoImage}
              alt="HX India Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-2 text-sm">Engineering | Contracting | Training</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold">Contact</h4>
          <p className="mt-2 text-sm">info@hxindia.com</p>
          <p className="text-sm">+91 0000000000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
