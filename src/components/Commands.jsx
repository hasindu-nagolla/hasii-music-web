import { useState } from "react";
import {
  Play,
  Pause,
  SkipForward,
  Square,
  Settings,
  Shield,
  Terminal,
} from "lucide-react";

const Commands = () => {
  const [activeTab, setActiveTab] = useState("user");

  const commandCategories = {
    user: {
      title: "User Commands",
      icon: Play,
      commands: [
        { cmd: "/play", desc: "Play a song from YouTube URL or search query" },
        { cmd: "/radio", desc: "Browse and play from 50+ live radio stations" },
        { cmd: "/queue", desc: "View current queue and now playing track" },
        { cmd: "/ping", desc: "Check bot status and system statistics" },
        { cmd: "/help", desc: "Display help menu with all commands" },
        { cmd: "/lang", desc: "Change bot language (English/Sinhala)" },
      ],
    },
    admin: {
      title: "Admin Commands",
      icon: Settings,
      commands: [
        { cmd: "/pause", desc: "Pause current audio stream" },
        { cmd: "/resume", desc: "Resume paused audio stream" },
        { cmd: "/skip", desc: "Skip to next track in queue" },
        { cmd: "/stop", desc: "Stop playback and clear queue" },
        { cmd: "/seek", desc: "Jump to specific timestamp in track" },
        { cmd: "/auth", desc: "Authorize user for playback controls" },
        { cmd: "/channelplay", desc: "Enable channel play mode" },
        { cmd: "/reload", desc: "Reload admin cache for group" },
      ],
    },
    sudo: {
      title: "Sudo Commands",
      icon: Shield,
      commands: [
        { cmd: "/stats", desc: "View comprehensive bot statistics" },
        { cmd: "/broadcast", desc: "Send message to all bot users" },
        { cmd: "/addsudo", desc: "Grant sudo privileges to user" },
        { cmd: "/blacklist", desc: "Block user or chat from using bot" },
        { cmd: "/restart", desc: "Restart the bot application" },
        { cmd: "/logs", desc: "Retrieve bot log files" },
        { cmd: "/eval", desc: "Execute Python code (owner only)" },
      ],
    },
  };

  return (
    <section
      id="commands"
      className="py-24 bg-white relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Command Reference
          </h2>
          <p className="text-gray-500 text-lg">
            Complete list of available commands organized by permission level
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(commandCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-200 border ${
                  activeTab === key
                    ? "bg-brand-dark border-brand-dark text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commandCategories[activeTab].commands.map((command, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors duration-200 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3 relative z-10">
                <Terminal className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <code className="text-lg font-mono text-brand-dark font-bold">
                    {command.cmd}
                  </code>
                  <p className="text-gray-500 mt-2 text-sm">
                    {command.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Command Usage Note */}
        <div className="mt-12 bg-brand-surface border border-brand-accent/50 p-6 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-brand-dark">
            <Terminal className="w-5 h-5 text-brand-primary" />
            Usage Notes
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1 font-bold">•</span>
              <span>
                Admin commands require administrator privileges in the group
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1 font-bold">•</span>
              <span>
                Sudo commands are restricted to bot owner and authorized sudo users
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1 font-bold">•</span>
              <span>
                Use <code className="text-brand-primary font-mono px-1 font-semibold">/help</code> in Telegram to see command examples and syntax
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Commands;
