import { useState, useEffect, useRef } from "react";
import { Users, Music as MusicIcon, Radio, TrendingUp } from "lucide-react";

const Stats = () => {
  const cardRefs = useRef([]);
  const [counters, setCounters] = useState({
    groups: 0,
    songs: 0,
    stations: 0,
    uptime: 0,
  });

  const stats = [
    {
      icon: Users,
      label: "Active Groups",
      value: "480+",
      target: 480,
      key: "groups",
    },
    {
      icon: MusicIcon,
      label: "Songs Played",
      value: "200K+",
      target: 200000,
      key: "songs",
    },
    {
      icon: Radio,
      label: "Radio Stations",
      value: "70+",
      target: 70,
      key: "stations",
    },
    {
      icon: TrendingUp,
      label: "Uptime",
      value: "99%",
      target: 99,
      key: "uptime",
    },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
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
      className="py-24 bg-brand-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Trusted by the community
          </h2>
          <p className="text-gray-500 text-lg">
            Join the growing network of Sri Lankan music lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative bg-white p-8 rounded-xl text-center border border-gray-100 hover:border-gray-300 transition-colors duration-200"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="inline-flex p-4 rounded-xl bg-brand-accent mb-4 text-brand-secondary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-brand-dark">
                  {stat.key === "songs"
                    ? Math.floor(counters[stat.key] / 1000) + "K+"
                    : stat.key === "uptime"
                      ? counters[stat.key] + "%"
                      : counters[stat.key] + "+"}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
