import { useState, useEffect } from "react";
import { Users, Music as MusicIcon, Radio, TrendingUp, MessageCircle } from "lucide-react";

const Stats = () => {
  const [counters, setCounters] = useState({
    groups: 0,
    chats: 0,
    songs: 0,
    stations: 0,
    uptime: 0,
  });

  const stats = [
    {
      icon: Users,
      label: "Served Groups",
      target: 600,
      key: "groups",
      suffix: "+",
    },
     {
      icon: MessageCircle,
      label: "Active Chats",
      target: 200,
      key: "chats",
      suffix: "+",
    },
    {
      icon: MusicIcon,
      label: "Songs Played",
      target: 200,
      key: "songs",
      suffix: "K+",
    },
    {
      icon: Radio,
      label: "Radio Stations",
      target: 70,
      key: "stations",
      suffix: "+",
    },
    {
      icon: TrendingUp,
      label: "Uptime",
      target: 99,
      key: "uptime",
      suffix: "%",
    },
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [stat.key]: Math.floor(current),
        }));
      }, interval);
    });
  }, []);

  return (
    <section
      id="stats"
      className="py-24 bg-white dark:bg-brand-dark relative border-t border-brand-border dark:border-brand-border-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
              Trusted by the community
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4">
              Join the growing network of music lovers around the world on Telegram.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-border dark:bg-brand-border-dark border border-brand-border dark:border-brand-border-dark rounded-sm overflow-hidden">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-brand-dark p-8 flex flex-col items-center justify-center text-center group"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors duration-300 mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-brand-dark dark:text-white mb-2 font-mono tracking-tight">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
