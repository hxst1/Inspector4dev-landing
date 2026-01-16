import "./globals.css";

export const metadata = {
  title: "Inspector4dev — Element Inspector Pro (Gratis)",
  description:
    "Inspector4dev: inspecciona elementos sin abrir DevTools. Info clara, rápido, y gratis.",
  icons: {
    icon: "/icon128.png",
  },
  openGraph: {
    title: "Inspector4dev",
    description: "Inspector de elementos pro y gratis para Chrome.",
    images: ["/icon128.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
