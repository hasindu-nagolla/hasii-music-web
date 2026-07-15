import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/download.svg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Stats", href: "#stats" },
    { name: "Commands", href: "#commands" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home">
            <img
            src={logo}
            alt="HasiiMusic"
            className="h-12 w-auto"/>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-brand-primary text-sm transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://t.me/hasiimusic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://t.me/HasiMusicBot?startgroup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white block text-center py-3 rounded-md font-semibold mt-4"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
