import {
  Zap,
  Shield,
  Globe,
  Play,
  Radio,
  Headphones,
  ListMusic,
  Sliders,
  Languages,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="text-xs font-bold tracking-widest text-brand-primary uppercase mb-4">
          EXPLORE HOW WE WORK
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Center Vertical Line (Hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2"></div>

        {/* Step 1 */}
        <div className="relative mb-32">
          {/* Step indicator */}
          <div className="flex flex-col items-center mb-12 relative z-10">
            <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
              1
            </div>
            <div className="text-brand-primary font-semibold mb-2">
              Setup & Connect
            </div>
            <h2 className="text-3xl font-bold text-brand-dark">
              Seamless Integration
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-center">
              Transform your group chat into a vibrant music hub. We collaborate
              with you to understand your requirements, ensuring a clean and
              easy setup to launch your bot successfully.
            </p>
          </div>

          {/* Cards for Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">
                Fast Installation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Add to your group in seconds. We help you validate your
                requirements and get started without any complex configurations
                before building your community.
              </p>
            </div>
            {/* Card 2 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Admin Security</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Secure role-based access. Only authorized admins can manage
                playback and settings, protecting your community from spam and
                abuse.
              </p>
            </div>
            {/* Card 3 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">VPS Ready</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Built on a solid foundation with proven open-source
                technologies. Our optimized tech stack ensures scalability and
                long-term 24/7 uptime.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mb-32">
          {/* Step indicator */}
          <div className="flex flex-col items-center mb-12 relative z-10">
            <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
              2
            </div>
            <div className="text-brand-primary font-semibold mb-2">
              High-Quality Playback
            </div>
            <h2 className="text-3xl font-bold text-brand-dark">
              Unlocking the best audio
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-center">
              Achieve crystal clear audio through optimized PyTgCalls streams.
              We support various sources and formats, continually optimizing
              until you find the perfect groove.
            </p>
          </div>

          {/* Cards for Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Play className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">
                YouTube Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Play any track directly from YouTube. Run rapid commands to
                fetch any song instantly without leaving your Telegram chat.
              </p>
            </div>
            {/* Card 2 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Live Radio</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                70+ live Sri Lankan radio stations built-in. Make informed
                choices and switch seamlessly between different broadcasters
                globally.
              </p>
            </div>
            {/* Card 3 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Studio Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ship features quickly with crisp audio. We implement advanced
                codecs and continuous caching to ensure your music never
                buffers.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          {/* Step indicator */}
          <div className="flex flex-col items-center mb-12 relative z-10">
            <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
              3
            </div>
            <div className="text-brand-primary font-semibold mb-2">
              Advanced Management
            </div>
            <h2 className="text-3xl font-bold text-brand-dark">
              Scale beyond boundaries
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-center">
              Scale confidently with enterprise-grade queue management. We
              implement the best controls to ensure your community can handle
              rapid growth while maintaining order.
            </p>
          </div>

          {/* Cards for Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <ListMusic className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Smart Queue</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Handle exponential user interactions seamlessly. Easy skip,
                pause, resume, and loop functions designed to manage massive
                playlists automatically.
              </p>
            </div>
            {/* Card 2 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Audio Filters</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Customize your sound with advanced audio filters. We implement
                bass boost, nightcore, and speed controls for ultimate playback
                flexibility.
              </p>
            </div>
            {/* Card 3 */}
            <div className="feature-card flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-md bg-brand-accent flex items-center justify-center mb-4 text-brand-secondary">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Multilingual</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stay ahead of issues with fully translated interfaces. We
                support multiple languages, ensuring zero downtime for your
                international audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
