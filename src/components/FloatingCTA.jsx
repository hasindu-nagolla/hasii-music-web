import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <>
      {/* Mobile floating button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative group">
          {/* Main button */}
          <a
            href="https://t.me/HasiMusicBot?startgroup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 px-6 py-4 bg-brand-dark text-white font-semibold rounded-full shadow-md hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Quick Start</span>
          </a>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-2 -right-2 p-1 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
