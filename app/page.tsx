"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Icons
const ChromeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PaletteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="10.5" r="2.5" />
    <circle cx="8.5" cy="7.5" r="2.5" />
    <circle cx="6.5" cy="12.5" r="2.5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const TypeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

const BoxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="7" y="7" width="10" height="10" rx="1" />
  </svg>
);

const ImageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const ZapIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const features = [
  {
    icon: <EyeIcon />,
    title: "Element Inspector",
    description:
      "Click any element to see its complete CSS properties, computed styles, and box model in a beautiful panel.",
  },
  {
    icon: <PaletteIcon />,
    title: "Color Picker",
    description:
      "Pick any color from the page with pixel-perfect precision. Includes a zoom view and automatic clipboard copy.",
  },
  {
    icon: <TypeIcon />,
    title: "Typography Details",
    description:
      "Instantly see font family, size, weight, line height, and letter spacing of any text element.",
  },
  {
    icon: <BoxIcon />,
    title: "Box Model Viewer",
    description:
      "Visual representation of margin, padding, border, and dimensions. Just like DevTools, but faster.",
  },
  {
    icon: <ImageIcon />,
    title: "Asset Explorer",
    description:
      "Browse all fonts, colors, and images used on the page. Export or copy with a single click.",
  },
  {
    icon: <ZapIcon />,
    title: "Keyboard Shortcuts",
    description:
      "Toggle inspector, activate color picker, and navigate quickly with intuitive keyboard shortcuts.",
  },
];

const shortcuts = [
  { keys: ["Alt", "I"], description: "Toggle Inspector" },
  { keys: ["C"], description: "Color Picker" },
  { keys: ["A"], description: "View Assets" },
  { keys: ["Esc"], description: "Close Panel" },
  { keys: ["H"], description: "Hover Passthrough" },
];

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Cargar tema guardado o preferencia del sistema
    const saved = localStorage.getItem("i4d-theme");
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // Aplicar tema
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("i4d-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <main className="relative min-h-screen grid-bg">
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#6366f1]/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                className="w-5 h-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <span className="text-xl font-bold">Inspector4dev</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="https://github.com/inspector4dev"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a href="#download" className="btn-secondary !py-2 !px-4 !text-sm">
              Download
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-sm text-[#818cf8] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Free Chrome Extension
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Inspect any website
            <br />
            <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
              like a pro
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary max-w-2xl mx-auto mb-10"
          >
            A powerful tool for developers and designers to inspect elements,
            pick colors, analyze typography, and explore assets on any webpage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#download" className="btn-primary">
              <ChromeIcon />
              Add to Chrome — Free
            </a>
            <a href="#features" className="btn-secondary">
              See Features
            </a>
          </motion.div>

          {/* Hero mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="glass-card p-6 max-w-3xl mx-auto">
              {/* Browser mockup */}
              <div className="rounded-xl overflow-hidden border border-[var(--i4d-border)]">
                {/* Browser bar */}
                <div className="bg-elevated px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[var(--i4d-hover)] rounded-lg px-4 py-1.5 text-sm text-tertiary max-w-md mx-auto">
                      example.com
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-[var(--i4d-bg)] p-8 relative min-h-[300px]">
                  {/* Simulated page content */}
                  <div className="space-y-4">
                    <div className="h-8 w-48 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg" />
                    <div className="h-4 w-full max-w-md bg-[var(--i4d-hover)] rounded" />
                    <div className="h-4 w-3/4 bg-[var(--i4d-hover)] rounded" />
                    <div className="h-4 w-5/6 bg-[var(--i4d-hover)] rounded" />
                  </div>

                  {/* Inspector panel mockup */}
                  <div className="absolute right-4 top-4 w-64 glass-card !rounded-2xl overflow-hidden animate-float">
                    <div className="p-4 border-b border-[var(--i4d-border)]">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="text-[#818cf8]">&lt;button&gt;</span>
                        <span className="text-tertiary">.primary-btn</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-tertiary">Color</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-white border border-[var(--i4d-border)]" />
                          <span className="font-mono text-xs">#FFFFFF</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-tertiary">Background</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] border border-[var(--i4d-border)]" />
                          <span className="font-mono text-xs">#6366F1</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-tertiary">Font</span>
                        <span className="font-mono text-xs">16px / 600</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight box */}
                  <div
                    className="absolute left-8 top-8 w-48 h-8 border-2 border-[#6366f1] rounded-lg pointer-events-none"
                    style={{ boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.2)" }}
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/3 glass-card !rounded-xl px-4 py-2 text-sm hidden lg:block"
            >
              <span className="text-[#22c55e]">✓</span> Click to inspect
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-4 top-1/2 glass-card !rounded-xl px-4 py-2 text-sm hidden lg:block"
            >
              <span className="text-[#818cf8]">🎨</span> Copy colors instantly
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Powerful features designed to speed up your workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="feature-card group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredFeature === index
                      ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white"
                      : "bg-elevated text-[#818cf8]"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-tertiary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shortcuts Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#111113]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Keyboard first
            </h2>
            <p className="text-xl text-secondary">
              Navigate faster with intuitive shortcuts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="space-y-4">
              {shortcuts.map((shortcut, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    {shortcut.keys.map((key, i) => (
                      <span key={i}>
                        <span className="kbd">{key}</span>
                        {i < shortcut.keys.length - 1 && (
                          <span className="text-tertiary mx-1">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-secondary">{shortcut.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#8b5cf6]/10" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to inspect?
              </h2>
              <p className="text-xl text-secondary mb-8 max-w-xl mx-auto">
                Join thousands of developers and designers who inspect smarter,
                not harder.
              </p>

              <a
                href="https://chrome.google.com/webstore/detail/inspector4dev/YOUR_EXTENSION_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg animate-glow"
              >
                <ChromeIcon />
                Add to Chrome — It's Free
              </a>

              <p className="text-sm text-tertiary mt-6">
                Works on Chrome, Edge, Brave, and other Chromium browsers
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[var(--i4d-border)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                className="w-4 h-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <span className="font-semibold">Inspector4dev</span>
          </div>

          <p className="text-sm text-tertiary">Made with 💜 for developers</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/hxst1/inspector4dev-chrome-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:contact@inspector4dev.com"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
