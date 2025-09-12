"use client";

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, ExternalLink, CheckCircle2, Target, Rocket, Link as LinkIcon } from "lucide-react";


/**
 * ⚡️ Álvaro Brotons – Portfolio Web (single-file React component)
 * - Stack: React + Tailwind + Framer Motion + Lucide icons
 * - Style: Minimal premium (negro/blanco/gris) + acento azul eléctrico (#1463FF)
 * - Contenido editable en los objetos DATA abajo (hero, about, projects, media).
 * - Listo para copiar en un proyecto Next.js o React. En Next.js, pégalo en app/page.tsx o app/page.jsx
 * - Tailwind necesario. En Vercel funciona out-of-the-box si tu template ya lo incluye.
 */

// 🎨 Paleta / Tokens
const COLORS = {
  bg: "#0B0B0C",
  card: "#121214",
  text: "#EAEAEA",
  muted: "#9CA3AF",
  accent: "#1463FF", // azul eléctrico
  accentSoft: "#3B82F6",
  border: "#1F2937",
};

// ✉️ Contacto / socials
const CONTACT = {
  name: "Álvaro Brotons Montón",
  role: "Marketing Digital & Growth Manager",
  email: "contacto@alvarobrotons.com",
  linkedin: "https://www.linkedin.com/in/alvarobrotons/",
};

// 🧠 Intro breve
const ABOUT = `Especialista en TikTok y Social Media con experiencia en la creación y gestión de estrategias digitales que impulsan visibilidad, engagement y ventas. Experto en producción de contenido nativo, tendencias virales y optimización de campañas para marcas y proyectos creativos. Perfil versátil que combina visión estratégica, creatividad y análisis de datos para lograr resultados medibles en entornos digitales competitivos.`;

// 📁 Proyectos (edita URLs y media)
const PROJECTS = [
  {
    id: "spsil",
    brand: "SPSIL",
    subtitle: "Pinturas, adhesivos, bricolaje; social + marketplaces",
    objective: "Crecer audiencia en TikTok y generar ventas directas en marketplaces.",
    actions: [
      "Producción masiva de contenido (100+ vídeos/mes)",
      "Crecimiento orgánico + inversión en ads de +500€",
      "Gestión integral de Amazon, Miravia y AliExpress",
      "Coordinación de diseño con equipos en CN/ES/AR",
    ],
    results: [
      "Cuenta A: 1K → 5K seguidores en 4 meses",
      "Cuenta B: 0 → 5K en 4 meses",
      "Ambas cuentas el primer mes +20.000€ facturados",
    ],
    links: [
      { label: "TikTok @spsil.auto", href: "https://www.tiktok.com/@spsil.auto", type: "link" },
      { label: "TikTok @spsil.paint", href: "https://www.tiktok.com/@spsil.paint", type: "link" },
    ],
    media: [
  { type: "image", src: "/spsilauto.png", caption: "Cuenta TikTok @spsil.auto" },
  { type: "image", src: "/spsilpaint.png", caption: "Cuenta TikTok @spsil.paint" },
],

  },
  {
    id: "payboys",
    brand: "Payboys.es",
    subtitle: "Agencia de filmmakers / estudio podcast",
    objective: "Llenar agenda de la sala de grabación de podcast con posicionamiento local.",
    actions: [
      "Desarrollo web en Framer con flujo de reservas online",
      "Google Ads geolocalizado para intención de búsqueda alta",
      "Optimización UX: fricción mínima en el booking",
    ],
    results: [
      "Agenda completa en semanas por dominar un nicho poco común en la zona",
      "CPA por reserva dentro de objetivo",
    ],
    links: [
      { label: "Visitar web", href: "https://payboys.es", type: "link" },
      { label: "Campaña Google Ads (capturas)", href: "#", type: "link" },
    ],
    media: [
      { type: "image", src: "/payboyshero.jpg", caption: "Landing – Hero y CTA de reserva" },
  { type: "image", src: "/payboysreserva.jpg", caption: "Flujo de booking en 3 pasos" },
],
links: [
  { label: "Visitar web", href: "https://payboys.es/", type: "link" },
],
  },
  {
    id: "moosh",
    brand: "MOOSH Universe",
    subtitle: "Promotora y representación de DJs",
    objective:
      "Profesionalizar comunicación con clubs/festivales y escalar bookings internacionales.",
    actions: [
  "Web con press kits y catálogos por artista",
  "Call outreach automatizado por email usando Streak CRM",
  "Automatizaciones de procesos con MAKE (emails, seguimiento, reclutamiento)",
 
],

    results: [
      "En 6 meses, bolos confirmados en ES, PT, FR y CO",
      "Calendarios cerrados con 3 meses de antelación",
    ],
    links: [
  { label: "MOOSH Universe (web)", href: "https://www.moshuniverse.com/", type: "link" },
],
media: [
    { type: "image", src: "/webmoshuniverse.png", caption: "Web y presskits de artistas" },
  { type: "image", src: "/reclutamientomoshuniverse.png", caption: "Sistema de reclutamiento con IA" },
],

  },
  
  {
  id: "club17",
  brand: "Club Diecisiete",
  subtitle: "Promotora de eventos en Alicante",
  objective: "Potenciar la identidad de marca y aumentar la venta de entradas para eventos.",
  actions: [
    "Desarrollo de branding y línea visual para la promotora",
    "Gestión integral de redes sociales con enfoque en engagement",
    "Creación de campañas de marketing digital orientadas a conversión y venta de entradas",
    "Optimización de la comunicación con la audiencia joven en Alicante",
  ],
  results: [
    "Eventos con alta asistencia y fuerte presencia digital",
    "Incremento notable de ventas anticipadas de entradas",
    "Consolidación de la marca como referente local en ocio nocturno",
  ],
  links: [
    { label: "Instagram Club Diecisiete", href: "https://www.instagram.com/club.diecisiete/", type: "link" },
  ],
  media: [
    { type: "image", src: "/feed.jpg", caption: "Gestión de redes sociales y branding" },
  { type: "image", src: "/promocion.png", caption: "Promociones digitales y RRPP" },
  ],
},

];

// 🔧 Componentes UI
function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm" style={{ borderColor: COLORS.border, color: COLORS.muted }}>
      {children}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.text }}>{value}</div>
      <div className="text-sm" style={{ color: COLORS.muted }}>{label}</div>
    </div>
  );
}

function MediaItem({ item }) {
  if (item.type === "video") {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border" style={{ borderColor: COLORS.border }}>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={item.src}
            title={item.caption || "video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {item.caption && <div className="px-3 py-2 text-sm" style={{ color: COLORS.muted }}>{item.caption}</div>}
      </div>
    );
  }
  return (
    <figure className="relative overflow-hidden rounded-2xl border" style={{ borderColor: COLORS.border }}>
      <img src={item.src} alt={item.caption || "media"} className="w-full h-auto object-cover" />
      {item.caption && (
        <figcaption className="px-3 py-2 text-sm" style={{ color: COLORS.muted }}>
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

function LinkChip({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border hover:opacity-90 transition"
      style={{ borderColor: COLORS.border, color: COLORS.text }}
    >
      <ExternalLink size={16} /> {label}
    </a>
  );
}

function ProjectCard({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 rounded-3xl p-6 md:p-8 border" style={{ borderColor: COLORS.border, background: COLORS.card }}>
      <div className="md:col-span-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: COLORS.text }}>{data.brand}</h3>
            <p className="text-sm" style={{ color: COLORS.muted }}>{data.subtitle}</p>
          </div>
          <Pill>
            <Target size={16} /> Caso de éxito
          </Pill>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm uppercase tracking-wider" style={{ color: COLORS.accent }}>Objetivo</h4>
          <p className="text-base" style={{ color: COLORS.text }}>{data.objective}</p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <h4 className="text-sm uppercase tracking-wider" style={{ color: COLORS.accent }}>Acciones</h4>
          <ul className="space-y-2 list-none">
            {data.actions.map((a, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: COLORS.text }}>
                <CheckCircle2 size={18} className="mt-0.5" style={{ color: COLORS.accent }} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <h4 className="text-sm uppercase tracking-wider" style={{ color: COLORS.accent }}>Resultados</h4>
          <ul className="space-y-2 list-disc pl-5" style={{ color: COLORS.text }}>
            {data.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {data.links?.map((l, i) => (
            <LinkChip key={i} href={l.href} label={l.label} />
          ))}
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.media?.map((m, i) => (
            <MediaItem key={i} item={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div style={{ background: COLORS.bg }} className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight" style={{ color: COLORS.text }}>
            Álvaro Brotons
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.muted }}>
            <a href="#about" className="hover:text-white">Sobre mí</a>
            <a href="#work" className="hover:text-white">Casos</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative">
        <Section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <Pill>
                <Rocket size={16} /> Marketing Digital & Growth Manager
              </Pill>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: COLORS.text }}>
  Dossier de <span style={{ color: COLORS.accent }}>Álvaro Brotons</span>
</h1>
<p className="text-lg md:text-xl" style={{ color: COLORS.muted }}>
  Selección de proyectos en marketing digital.
</p>

              <div className="flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium" style={{ background: COLORS.accent, color: "white" }}>
                  Ver casos <ArrowUpRight size={18} />
                </a>
              </div>
             
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border p-6" style={{ borderColor: COLORS.border, background: COLORS.card }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full" style={{ background: COLORS.accent }} />
                  <div>
                    <div className="font-semibold" style={{ color: COLORS.text }}>{CONTACT.name}</div>
                    <div className="text-sm" style={{ color: COLORS.muted }}>{CONTACT.role}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:opacity-90" style={{ color: COLORS.text }}>
                    <Mail size={18} /> {CONTACT.email}
                  </a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-90" style={{ color: COLORS.text }}>
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </header>

      {/* About */}
      <Section id="about" className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-xl md:text-2xl font-semibold" style={{ color: COLORS.text }}>Sobre mí</h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>{ABOUT}</p>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="py-8 md:py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold" style={{ color: COLORS.text }}>Casos de éxito</h2>
          <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.muted }}>
            <LinkIcon size={16} /> Links y evidencias adjuntas
          </div>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard data={p} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
     


      <footer className="py-10">
        <Section>
          <div className="flex items-center justify-between text-sm" style={{ color: COLORS.muted }}>
            <span>© {new Date().getFullYear()} Álvaro Brotons</span>
            <span>Portfolio Álvaro Brotons.</span>
          </div>
        </Section>
      </footer>
    </div>
  );
}
