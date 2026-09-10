import { Github, FileText, Users, ArrowRight } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark relative border-t border-brand-border dark:border-brand-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-slate-900 border border-brand-border dark:border-brand-border-dark rounded-sm p-8 md:p-12">
          
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark dark:text-white">
              Open Source & Free
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
              HasiiMusicBot is built in the open. We believe in transparent development and community-driven improvements.
            </p>
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-dark dark:bg-brand-primary text-white dark:text-brand-dark px-6 py-3 rounded-sm font-medium hover:bg-slate-800 dark:hover:bg-brand-primary/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-brand-dark border border-brand-border dark:border-brand-border-dark p-6 hover:border-brand-primary dark:hover:border-brand-primary transition-colors flex flex-col items-start rounded-sm"
            >
              <Users className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors mb-4" />
              <h3 className="font-semibold text-brand-dark dark:text-white mb-2">Contribute</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                We actively accept pull requests. Help us fix bugs and add features.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Submit PR <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-brand-dark border border-brand-border dark:border-brand-border-dark p-6 hover:border-brand-primary dark:hover:border-brand-primary transition-colors flex flex-col items-start rounded-sm"
            >
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors mb-4" />
              <h3 className="font-semibold text-brand-dark dark:text-white mb-2">GPL v3 License</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Ensuring this project remains free, open, and available for everyone.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Read License <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
