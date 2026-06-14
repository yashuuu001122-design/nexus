import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

export default function KyraaWebsite() {
  const [activeCommandTab, setActiveCommandTab] = useState("Music");
  const [showInvitePopup, setShowInvitePopup] = useState(false);

  const features = [
    {
      title: "Fast Music Playback",
      desc: "Ultra smooth playback with quick queue handling, autoplay vibes, and a clean experience for every server.",
      icon: "🎵",
    },
    {
      title: "Invite in One Click",
      desc: "Users can invite Kyraa. straight from the website using the Discord bot invite flow.",
      icon: "🔗",
    },
    {
      title: "Modern Controls",
      desc: "Show off commands, features, status, and bot highlights in one premium looking dashboard.",
      icon: "⚡",
    },
    {
      title: "Server Friendly",
      desc: "Made for communities that want style, music, utility, and a smooth premium feel.",
      icon: "💜",
    },
  ];

  const stats = [
    { label: "Servers Ready", value: "100+" },
    { label: "24/7 Style", value: "Always On" },
    { label: "Response Feel", value: "Instant" },
    { label: "Theme", value: "Purple Premium" },
  ];

  // FIXED: Removed the malformed object declaration inside the array
  const commandTabs = useMemo(
    () => ({
      Music: [
        "$play song name",
        "$skip",
        "$queue",
        "$pause",
        "$resume",
        "$247",
      ],
      Utility: [
        "$help",
        "$invite",
        "$support",
        "$ping",
        "$stats",
        "$about",
        "$volume",
        "$disconnect",
      ],
      Admin: [
        "$setup",
        "$prefix",
        "$dj",
        "$autoplay",
      ]
    }),
    []
  );

  const activeCommands = commandTabs[activeCommandTab as keyof typeof commandTabs] || [];

  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1410402936487411774&permissions=8&scope=bot%20applications.commands";

  const openInvite = () => {
    setShowInvitePopup(true);
    window.open(inviteLink, "_blank", "noopener,noreferrer");
    setTimeout(() => setShowInvitePopup(false), 2800);
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-[#07030f] text-white overflow-hidden relative">
      <AnimatePresence>
        {showInvitePopup && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] px-5 py-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-purple-900/40 text-sm text-white/90"
          >
            Invite page opened successfully ✨
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(76,29,149,0.22),transparent_30%)]" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full bg-white/10"
            style={{
              width: `${(i % 4) + 4}px`,
              height: `${(i % 4) + 4}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              y: [0, -30 - (i % 5) * 10, 0],
              x: [0, (i % 3) * 8 - 8, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-48 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-purple-800/20 blur-3xl pointer-events-none"
      />

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-2xl bg-black/20 border-b border-white/10 shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-700 shadow-2xl shadow-purple-900/40 flex items-center justify-center text-xl font-black ring-1 ring-white/20">
              K
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide">Kyraa.</div>
              <div className="text-xs text-white/60">Premium Discord Bot Website</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/75">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#commands" className="hover:text-white transition">Commands</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <button
            onClick={openInvite}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 hover:scale-105 transition duration-300 font-semibold shadow-lg shadow-purple-800/30 inline-block"
          >
            Invite Bot
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20" {...sectionAnimation}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 border border-white/10 text-sm text-purple-200 mb-6 backdrop-blur-xl shadow-lg shadow-purple-900/20">
                <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                Beautiful website for your Discord bot
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-[length:200%_200%] bg-gradient-to-r from-fuchsia-400 via-purple-200 to-violet-500"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  Kyraa.
                </motion.span>
              </h1>

              <p className="mt-6 text-white/70 text-lg leading-8 max-w-2xl">
                Welcome to Kyraa. — your ultimate Discord music bot. Enjoy smooth playback, powerful controls, and a premium experience designed to elevate your server's vibe.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openInvite}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 font-semibold hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-600/40 transition duration-300 inline-block"
                >
                  Invite Kyraa.
                </button>
                <a
                  href="#features"
                  className="px-6 py-3 rounded-2xl bg-white/7 border border-white/15 font-semibold hover:bg-white/10 transition backdrop-blur-xl"
                >
                  Explore Website
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item) => (
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-2xl shadow-xl shadow-purple-900/20 hover:shadow-purple-700/30 transition duration-300"
                  >
                    <div className="text-2xl font-black">{item.value}</div>
                    <div className="text-sm text-white/55 mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Panel Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-purple-800/10 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-3xl shadow-2xl shadow-purple-950/40 overflow-hidden ring-1 ring-white/10">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-sm text-white/60">kyraa-.vercel.app</div>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-violet-700/20 border border-white/10 p-6 backdrop-blur-2xl shadow-lg shadow-purple-900/20"
                  >
                    <div className="text-sm text-purple-200 mb-2">Featured Bot Panel</div>
                    <div className="text-3xl font-black">Kyraa.</div>
                    <div className="mt-5 flex gap-3 flex-wrap">
                      {["Music", "24/7", "Invite"].map((tag) => (
                        <div key={tag} className="px-3 py-2 rounded-xl bg-white/10 text-sm border border-white/10">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl shadow-lg shadow-purple-900/10">
                      <div className="text-white/50 text-sm">Theme</div>
                      <div className="text-xl font-bold mt-1">Purple Premium UI</div>
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl shadow-lg shadow-purple-900/10">
                      <div className="text-white/50 text-sm">Main Action</div>
                      <div className="text-xl font-bold mt-1">Invite from Website</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section id="features" className="max-w-7xl mx-auto px-6 py-16" {...sectionAnimation}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-purple-300 font-semibold tracking-[0.25em] uppercase text-xs mb-3">Features</div>
            <h2 className="text-3xl md:text-5xl font-black">Everything your bot website should have</h2>
            <p className="mt-4 text-white/65 text-lg">
              Clean sections, premium looks, powerful invite flow, and enough space to show your bot properly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature) => {
              const isInviteCard = feature.title === "Invite in One Click";
              return (
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  key={feature.title}
                  className="h-full"
                >
                  <button
                    type="button"
                    onClick={isInviteCard ? openInvite : undefined}
                    className={`rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-3xl transition duration-300 shadow-xl shadow-purple-900/20 hover:shadow-purple-700/30 block text-left w-full h-full ${
                      isInviteCard ? "cursor-pointer hover:border-fuchsia-400/40" : ""
                    }`}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-white/65 leading-7">{feature.desc}</p>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Commands Section */}
        <motion.section id="commands" className="max-w-7xl mx-auto px-6 py-16" {...sectionAnimation}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-3xl shadow-xl shadow-purple-900/20 hover:shadow-purple-700/30 transition duration-300">
              <div className="text-purple-300 font-semibold tracking-[0.25em] uppercase text-xs mb-3">Commands</div>
              <h2 className="text-3xl md:text-4xl font-black">Command categories</h2>
              <p className="mt-4 text-white/65 leading-8 text-lg">
                Switch between categories to preview what Kyraa. can do.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {Object.keys(commandTabs).map((tab) => {
                  const active = activeCommandTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveCommandTab(tab)}
                      className={`px-4 py-2.5 rounded-2xl border transition duration-300 ${
                        active
                          ? "bg-gradient-to-r from-fuchsia-500/30 to-violet-500/30 border-fuchsia-400/40 shadow-lg shadow-purple-900/20"
                          : "bg-white/6 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={activeCommandTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {activeCommands.map((cmd) => (
                  <div
                    key={cmd}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm text-purple-100 backdrop-blur-xl shadow-lg shadow-purple-900/10"
                  >
                    {cmd}
                  </div>
                ))}
              </motion.div>
            </div>

            <div id="stats-highlights" className="space-y-6">
              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-600/15 to-violet-800/15 p-8 backdrop-blur-3xl shadow-xl shadow-purple-900/20">
                <div className="text-purple-300 font-semibold tracking-[0.25em] uppercase text-xs mb-3">Highlights</div>
                <h3 className="text-2xl md:text-3xl font-black">Why people will like this site</h3>
                <ul className="mt-6 space-y-4 text-white/75 leading-7">
                  <li>• Invite button is placed clearly for fast bot adding.</li>
                  <li>• Premium purple theme fits music bot branding.</li>
                  <li>• Strong hover effects make the UI feel alive.</li>
                  <li>• Smooth animated transitions improve the overall feel.</li>
                </ul>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-3xl shadow-xl shadow-purple-900/20 hover:shadow-purple-700/30 transition duration-300">
                <h3 className="text-2xl font-black">Ready to customize</h3>
                <p className="mt-4 text-white/65 leading-8">
                  You can keep extending this layout with vote buttons, changelogs, supporters, dashboards, and more frontend-only sections.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section id="faq" className="max-w-7xl mx-auto px-6 py-16" {...sectionAnimation}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-purple-300 font-semibold tracking-[0.25em] uppercase text-xs mb-3">FAQ</div>
            <h2 className="text-3xl md:text-5xl font-black">Frequently asked questions</h2>
            <p className="mt-4 text-white/65 text-lg">
              Common questions for users who visit the Kyraa. website.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {[
              {
                q: "How does the invite button work?",
                a: "Users can invite Kyraa. directly from this website using the Discord invite flow.",
              },
              {
                q: "Can I add more sections later?",
                a: "Yes. You can extend this page with support server links, vote buttons, dashboard panels, and more.",
              },
              {
                q: "Do these animations need a backend?",
                a: "No. These transitions, gradient effects, tabs, and popup work fully on the frontend.",
              },
              {
                q: "Is this style mobile friendly?",
                a: "Yes. The layout is responsive and keeps the premium glassmorphism look on mobile and desktop both.",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-3xl shadow-lg shadow-purple-900/20 hover:scale-[1.01] transition duration-300"
              >
                <div className="text-xl font-bold">{item.q}</div>
                <p className="mt-3 text-white/65 leading-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer Support Invite Banner Section */}
        <motion.section id="support" className="max-w-7xl mx-auto px-6 py-20" {...sectionAnimation}>
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-700/15 to-black/40 p-8 md:p-12 text-center backdrop-blur-3xl shadow-2xl shadow-purple-900/40 ring-1 ring-white/10 hover:shadow-purple-600/40 transition duration-300">
            <div className="text-purple-300 font-semibold tracking-[0.3em] uppercase text-xs mb-3">Kyraa.</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Invite your bot in one click</h2>
            <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto leading-8">
              Smooth gradients, stronger glass cards, animated transitions, category tabs, and invite popup are now all part of the experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={openInvite}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 font-semibold hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-600/40 transition duration-300 inline-block"
              >
                Invite Kyraa.
              </button>
              <a
                href="https://discord.gg/zErS7FTxhX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-white/8 border border-white/10 font-bold hover:bg-white/10 transition backdrop-blur-xl"
              >
                Support Server
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/55">
          <div>© 2026 Kyraa. — Designed for a premium Discord bot feel.</div>
          <div className="flex items-center gap-5">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#commands" className="hover:text-white transition">Commands</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
