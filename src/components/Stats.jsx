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
      label: "𝐀𝐜𝐭𝐢𝐯𝐞 𝐆𝐫𝐨𝐮𝐩𝐬",
      value: "𝟒𝟖𝟎+",
      target: 480,
      key: "groups",
    },
    {
      icon: MusicIcon,
      label: "𝐒𝐨𝐧𝐠𝐬 𝐏𝐥𝐚𝐲𝐞𝐝",
      value: "𝟐𝟎𝟎𝐊+",
      target: 200000,
      key: "songs",
    },
    {
      icon: Radio,
      label: "𝐑𝐚𝐝𝐢𝐨 𝐒𝐭𝐚𝐭𝐢𝐨𝐧𝐬",
      value: "𝟕𝟎+",
      target: 70,
      key: "stations",
    },
    {
      icon: TrendingUp,
      label: "𝐔𝐩𝐭𝐢𝐦𝐞",
      value: "𝟗𝟎%",
      target: 90,
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
    <section className="section-padding bg-spotify-surface relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-spotify-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-spotify-green">Trusted by Users</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join the growing community of Sri Lankan music lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative glass p-8 rounded-2xl text-center transform transition-all duration-500 animate-scale-in hover:border-spotify-green"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={(e) => {
                  const card = cardRefs.current[index];
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                }}
                onMouseLeave={() => {
                  const card = cardRefs.current[index];
                  card.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-spotify-green/0 via-spotify-green/0 to-spotify-green/0 group-hover:from-spotify-green/20 group-hover:via-spotify-green/10 group-hover:to-transparent transition-all duration-500 -z-10 blur-xl"></div>

                <div className="inline-flex p-4 rounded-2xl bg-spotify-green mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-spotify-green/50">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold mb-2 text-spotify-green group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
