import {
  Zap,
  Shield,
  Globe,
  Play,
  Radio,
  Headphones,
  ListMusic,
  Disc,
  Languages,
} from "lucide-react";

const featuresList = [
  {
    icon: Zap,
    title: "Fast Installation",
    desc: "Add to your group in seconds. Validate requirements and get started without complex configurations.",
  },
  {
    icon: Shield,
    title: "Admin Security",
    desc: "Secure role-based access. Only authorized admins can manage playback, protecting from abuse.",
  },
  {
    icon: Globe,
    title: "VPS Ready",
    desc: "Built on a solid foundation. Our optimized stack ensures scalability and 24/7 uptime.",
  },
  {
    icon: Play,
    title: "YouTube Support",
    desc: "Play any track directly from YouTube. Run rapid commands to fetch any song instantly.",
  },
  {
    icon: Radio,
    title: "Live Radio",
    desc: "70+ live Sri Lankan radio stations built-in. Switch seamlessly between different broadcasters.",
  },
  {
    icon: Headphones,
    title: "Studio Quality",
    desc: "Ship features quickly with crisp audio. Advanced codecs and caching ensure zero buffering.",
  },
  {
    icon: ListMusic,
    title: "Smart Queue",
    desc: "Easily skip, pause, resume, and loop tracks to effortlessly manage large playlists.",
  },
  {
    icon: Disc,
    title: "Spotify Integration",
    desc: "Seamlessly play tracks, playlists, and albums directly from Spotify links.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    desc: "Stay ahead with fully translated interfaces. Multiple languages supported for international audiences.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-brand-surface dark:bg-slate-950 relative border-t border-brand-border dark:border-brand-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3 animate-slide-up">
            Core Architecture
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Built for performance, security, and scale.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border dark:bg-brand-border-dark border border-brand-border dark:border-brand-border-dark overflow-hidden rounded-sm">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="group bg-white dark:bg-brand-dark p-8 hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-colors duration-300 relative"
              >
                <div className="relative z-10">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-brand-primary transition-colors duration-300 mb-6" />
                  <h4 className="text-lg font-semibold text-brand-dark dark:text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
