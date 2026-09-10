import { ArrowRight, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh]"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent dark:bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            v2.5.0 Live Now
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark dark:text-white mb-6 animate-slide-up leading-[1.1]">
            High-fidelity audio streaming for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-400">
              Telegram.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal max-w-2xl mb-10 animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.1s" }}
          >
            HasiiMusicBot delivers studio-quality playback and advanced queue management for communities of any size. Built on PyTgCalls for zero latency.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="https://t.me/HasiMusicBot?startgroup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-brand-dark dark:bg-brand-primary text-white dark:text-brand-dark font-medium rounded hover:bg-slate-800 dark:hover:bg-brand-primary/90 transition-all active:scale-[0.98]"
            >
              Add to Telegram
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#commands"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-white dark:bg-brand-dark text-brand-dark dark:text-white font-medium border border-brand-border dark:border-brand-border-dark rounded hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98]"
            >
              <Terminal className="w-4 h-4" />
              View Commands
            </a>
          </div>

          <div
            className="mt-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-500 uppercase mb-4">
              Powered by modern stack
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pyrogram', 'MongoDB', 'yt-dlp', 'Linux'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-sm font-mono rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Abstract visual or code snippet */}
        <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            <div className="text-slate-400 space-y-2">
              <p><span className="text-brand-primary">~</span> $ /play never gonna give you up</p>
              <p className="text-emerald-400">✓ Found match: Rick Astley - Never Gonna Give You Up</p>
              <p className="text-slate-500">▶ Downloading highest quality audio format...</p>
              <p className="text-slate-500">▶ Joining voice chat...</p>
              <p className="text-white mt-4 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                Now Playing: Never Gonna Give You Up (3:32)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
