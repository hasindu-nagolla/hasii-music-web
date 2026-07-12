import { Music, Github, MessageCircle, ArrowRight } from "lucide-react";
import HasiiLogo from "../assets/Hasii.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
    >
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-tight tracking-tight text-brand-dark mb-6 animate-slide-up">
        Let's build your next <br className="hidden md:block" />
        <span className="text-brand-primary">music experience.</span>
      </h1>

      <p
        className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mb-12 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        We deliver studio-quality audio from your first voice chat to a planet scale <span className="font-semibold text-brand-dark">Telegram community</span>.
      </p>

      {/* Tech Stack Header */}
      <div 
        className="text-xs font-bold tracking-widest text-brand-primary uppercase mb-6 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        WE WORK WITH
      </div>

      {/* Tech Stack Badges */}
      <div
        className="flex flex-wrap gap-4 justify-center items-center opacity-70 animate-fade-in grayscale hover:grayscale-0 transition-all duration-500"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Placeholder icons for tech stack (using text/colors for demonstration) */}
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
          <span className="font-bold text-blue-600">Python</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
          <span className="font-bold text-teal-500">Pyrogram</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
          <span className="font-bold text-green-600">MongoDB</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
          <span className="font-bold text-red-500">yt-dlp</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-md">
          <span className="font-bold text-gray-700">Linux</span>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-400 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
        We use cutting-edge frameworks like PyTgCalls and advanced caching mechanisms built to handle high-demand workloads seamlessly.
      </p>
    </section>
  );
};

export default Hero;
