/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111113",
        accent: "#6366f1",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,.35), 0 20px 60px rgba(99,102,241,.18)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(80% 80% at 50% 0%, rgba(99,102,241,.25) 0%, rgba(17,17,19,0) 60%)",
      },
    },
  },
  plugins: [],
};
