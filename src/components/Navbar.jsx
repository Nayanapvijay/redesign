import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/hx-india-logo-color-white-outline.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoImage}
            alt="HX India Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-body">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Products</Link>
          <Link to="/training">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md font-semibold">
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link to="/training" onClick={() => setOpen(false)}>
            Training
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
