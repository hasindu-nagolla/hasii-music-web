import { useState } from "react";
import { Play, Settings, Shield, Command as CmdIcon } from "lucide-react";

const Commands = () => {
  const [activeTab, setActiveTab] = useState("user");

  const commandCategories = {
    user: {
      title: "User",
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
      title: "Admin",
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
      title: "Sudo",
      icon: Shield,
      commands: [
        { cmd: "/stats", desc: "View bot statistics" },
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
      className="py-24 bg-brand-surface dark:bg-slate-950 relative border-t border-brand-border dark:border-brand-border-dark"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark dark:text-white">
            Command Reference
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Complete list of available commands organized by permission level.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
              {Object.entries(commandCategories).map(([key, category]) => {
                const Icon = category.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "text-brand-primary bg-brand-primary/10 border-l-2 border-brand-primary"
                        : "text-slate-600 dark:text-slate-400 hover:text-brand-dark dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border-l-2 border-transparent"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.title} Commands
                  </button>
                );
              })}
            </div>
            
            <div className="hidden md:block mt-8 p-4 bg-slate-50 dark:bg-slate-900/50 border border-brand-border dark:border-brand-border-dark text-sm text-slate-500 dark:text-slate-400 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-brand-dark dark:text-white font-semibold">
                <CmdIcon className="w-4 h-4" />
                Pro Tip
              </div>
              <p>Type <code className="font-mono text-brand-primary">/help</code> in any chat where the bot is active to get an inline menu.</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="border border-brand-border dark:border-brand-border-dark bg-white dark:bg-brand-dark overflow-hidden rounded-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/80 border-b border-brand-border dark:border-brand-border-dark">
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/3">Command</th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border dark:divide-brand-border-dark">
                  {commandCategories[activeTab].commands.map((command, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                      <td className="py-4 px-6 font-mono text-sm font-semibold text-brand-dark dark:text-white">
                        {command.cmd}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                        {command.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
