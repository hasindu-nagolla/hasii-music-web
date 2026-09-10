import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

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
        isScrolled ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-brand-border dark:border-brand-border-dark" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home">
            <Logo className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary text-sm transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="https://t.me/hasiimusic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark dark:bg-brand-primary text-white dark:text-brand-dark px-4 py-2 rounded-sm text-sm font-semibold hover:bg-slate-800 dark:hover:bg-brand-primary/90 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu and theme toggle buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block text-gray-600 dark:text-gray-300 hover:text-brand-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://t.me/HasiMusicBot?startgroup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark dark:bg-brand-primary text-white dark:text-brand-dark block text-center py-3 rounded-sm font-semibold mt-4"
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
