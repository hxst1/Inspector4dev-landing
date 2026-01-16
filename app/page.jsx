import Image from "next/image";

const features = [
  {
    title: "Info esencial al instante",
    desc: "Tag, ID, clases, tamaño, tipografía, layout y box model en una tarjeta limpia.",
  },
  {
    title: "Picker de color tipo ColorZilla",
    desc: "Copia el color bajo el cursor con un atajo. Rápido y sin fricción.",
  },
  {
    title: "Export de CSS",
    desc: "Copia CSS del elemento o export completo para pegarlo donde quieras.",
  },
  {
    title: "Assets en un clic",
    desc: "Lista imágenes, backgrounds y SVGs detectados en la página y descárgalos.",
  },
];

const steps = [
  { k: "1", t: "Instala la extensión", d: "Añádela a Chrome en segundos." },
  { k: "2", t: "Activa Inspector4dev", d: "Usa ⌥/Alt + I o el botón." },
  {
    k: "3",
    t: "Clic en cualquier elemento",
    d: "Verás su info y acciones útiles.",
  },
];

const faqs = [
  {
    q: "¿Es gratis de verdad?",
    a: "Sí. Inspector4dev es gratis. Sin cuentas, sin paywalls.",
  },
  {
    q: "¿Funciona en cualquier web?",
    a: "Funciona en la mayoría de sitios. Algunas páginas con políticas estrictas pueden limitar lectura de píxeles/imagenes (CORS).",
  },
  {
    q: "¿Qué atajos tiene?",
    a: "Alt/⌥ + I para activar. C para copiar color bajo el cursor. A para abrir panel de assets. Esc para cerrar.",
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-[-180px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px] opacity-[.12]" />
      </div>

      {/* container */}
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-14">
        <Header />

        <Hero />

        <section id="features" className="mt-14 md:mt-20">
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">
            Todo lo que necesitas, sin abrir DevTools
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Diseñado para ir directo al grano: inspección rápida, export útil y
            una UI limpia que no molesta.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[.03] p-5 backdrop-blur-sm hover:border-white/20"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-9 w-9 rounded-xl bg-accent/15 ring-1 ring-accent/30" />
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mt-14 md:mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Empieza en 10 segundos
                </h2>
                <p className="mt-2 text-white/70">
                  Una vez instalada, se integra en tu flujo: hover, clic y
                  copiar. Ya.
                </p>
              </div>

              <div className="flex gap-2">
                <Pill>Alt/⌥ + I</Pill>
                <Pill>C</Pill>
                <Pill>A</Pill>
                <Pill>Esc</Pill>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/10 bg-bg/40 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                      <span className="font-semibold">{s.k}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{s.t}</h3>
                      <p className="text-sm text-white/70">{s.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mt-14 md:mt-20">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/[.03] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <span className="mr-2 inline-block text-accent">▸</span>
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <CTA />

        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <Image
          src="/icon128.png"
          alt="Inspector4dev"
          width={40}
          height={40}
          className="rounded-xl"
          priority
        />
        <div className="leading-tight">
          <div className="text-sm font-semibold">Inspector4dev</div>
          <div className="text-xs text-white/60">Element Inspector Pro</div>
        </div>
      </a>

      <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        <a className="hover:text-white" href="#features">
          Features
        </a>
        <a className="hover:text-white" href="#how">
          Cómo funciona
        </a>
        <a className="hover:text-white" href="#faq">
          FAQ
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#download"
          className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
        >
          Instalar gratis
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(99,102,241,.75)]" />
            Pro + gratis • Hecho para devs
          </div>

          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Inspecciona elementos{" "}
            <span className="text-accent">sin perder tiempo</span> en DevTools
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-white/70">
            Inspector4dev te muestra lo importante en pantalla: estilos, layout,
            box model, colores y acciones útiles (copiar/export) con atajos
            rápidos.
          </p>

          <div id="download" className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
            >
              Instalar en Chrome (gratis)
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[.03] px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/20"
            >
              Ver features
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/60">
            <Badge>Alt/⌥ + I</Badge>
            <Badge>C copiar color</Badge>
            <Badge>A assets</Badge>
            <Badge>Esc cerrar</Badge>
          </div>
        </div>

        <PreviewCard />
      </div>
    </section>
  );
}

function PreviewCard() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5 shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-accent/15 ring-1 ring-accent/30" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Inspector</div>
              <div className="text-xs text-white/60">Vista rápida</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Dot />
            <Dot />
            <Dot />
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          <Row label="Element" value="<button>#cta .primary" accent />
          <Row label="Size" value="168 × 44 px" />
          <Row label="Font" value="Inter • 14px • 600" />
          <Row label="Color" value="#FFFFFF" />
          <Row label="Background" value="#6366F1" accent />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button className="rounded-xl bg-white/[.05] px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:ring-white/20">
            Copiar CSS
          </button>
          <button className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent/90">
            Exportar
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-bg/40 p-4 text-xs text-white/60">
          <div className="flex justify-between">
            <span>Tipografía</span>
            <span className="text-white/40">▼</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Mini label="Line height" value="20px" />
            <Mini label="Spacing" value="0.2px" />
            <Mini label="Align" value="center" />
            <Mini label="Weight" value="600" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-accent/20 to-white/[.03] p-7 md:p-10 shadow-glow">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Instala Inspector4dev y ahorra tiempo hoy
        </h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Ligero, rápido y enfocado en lo que importa. Ideal para maquetar,
          debuggear y copiar estilos sin interrumpir tu flujo.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent/90"
          >
            Instalar gratis
          </a>
          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[.03] px-6 py-3 text-sm font-semibold text-white/90 hover:border-white/20"
          >
            Leer FAQ
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 py-10 text-sm text-white/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-xl bg-accent/15 ring-1 ring-accent/30" />
          <span>© {new Date().getFullYear()} Inspector4dev</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href="#features">
            Features
          </a>
          <a className="hover:text-white" href="#how">
            Cómo funciona
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}

/* small ui helpers */
function Dot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-white/20" />;
}

function Row({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-bg/40 px-4 py-3">
      <span className="text-xs text-white/60">{label}</span>
      <span
        className={`text-xs font-semibold ${accent ? "text-accent" : "text-white/85"}`}
      >
        {value}
      </span>
    </div>
  );
}

function Mini({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2">
      <div className="text-[10px] text-white/50">{label}</div>
      <div className="mt-0.5 text-xs font-semibold text-white/85">{value}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1">
      {children}
    </span>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-white/80">
      <kbd className="font-semibold text-white">{children}</kbd>
    </span>
  );
}
