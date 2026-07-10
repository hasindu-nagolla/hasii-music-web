import { Github, MessageCircle, ExternalLink, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Commands", href: "#commands" },
      {
        name: "Documentation",
        href: "https://github.com/hasindu-nagolla/HasiiMusicBot#readme",
      },
    ],
    community: [
      { name: "Telegram Channel", href: "https://t.me/hasiimusic" },
      { name: "Support Group", href: "https://t.me/+VWlXK8QrYfZlYjNl" },
      {
        name: "Contribute",
        href: "https://github.com/hasindu-nagolla/HasiiMusicBot/pulls",
      },
    ],
    resources: [
      {
        name: "GitHub Repo",
        href: "https://github.com/hasindu-nagolla/HasiiMusicBot",
      },
      {
        name: "License (MIT)",
        href: "https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/LICENSE",
      },
      {
        name: "Project Structure",
        href: "https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/PROJECT_STRUCTURE.md",
      },
    ],
  };

  return (
    <footer className="relative z-10 bg-brand-surface-light border-t border-gray-100 mt-20">
      
      {/* Huge Pre-Footer CTA */}
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">How can we help?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Let's have a quick chat or connect with us instantly to set up your Telegram community.
        </p>
        <a 
          href="https://t.me/hasiimusic" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/50 transform hover:-translate-y-1 transition-all duration-300"
        >
          Get in touch
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-black">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                hasii<span className="font-light">music</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Advanced Telegram music streaming bot with studio-quality audio
              and powerful features.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/hasindu-nagolla/HasiiMusicBot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-brand-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+VWlXK8QrYfZlYjNl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-brand-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {link.href.startsWith("http") && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} HasiiMusicBot. All rights reserved. Developed by{" "}
              <a
                href="https://github.com/hasindu-nagolla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary font-medium hover:text-brand-secondary transition-colors"
              >
                Hasindu Nagolla.
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a
                href="#home"
                className="hover:text-brand-primary transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
