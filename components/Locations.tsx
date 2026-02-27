"use client";

import { motion } from "framer-motion";

const locations = [
  {
    name: "Steppe на Абая",
    address: "ул. Абая, 44",
    district: "Алмалинский район",
    hours: "07:00 — 22:00",
  },
  {
    name: "Steppe на Достыке",
    address: "пр. Достык, 128",
    district: "Медеуский район",
    hours: "08:00 — 23:00",
  },
  {
    name: "Steppe на Жандосова",
    address: "ул. Жандосова, 58",
    district: "Бостандыкский район",
    hours: "07:30 — 21:00",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.3em] mb-4">
            Адреса
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-6">
            Наши кофейни
          </h2>
          <div className="w-16 h-px bg-terracotta/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.address}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-terracotta"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-brown-dark">
                  {loc.name}
                </h3>
              </div>
              <div className="space-y-2 text-brown-light text-sm">
                <p className="text-base">{loc.address}</p>
                <p>{loc.district}</p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {loc.hours}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-2xl overflow-hidden h-72 md:h-96 bg-sand"
        >
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(92,61,46,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(92,61,46,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute top-[30%] left-[25%] flex flex-col items-center">
            <div className="w-3.5 h-3.5 bg-terracotta rounded-full animate-pulse" />
            <div className="w-px h-4 bg-terracotta/50" />
            <span className="text-[10px] text-brown-light mt-0.5 whitespace-nowrap">
              ул. Абая
            </span>
          </div>
          <div
            className="absolute top-[45%] left-[52%] flex flex-col items-center"
            style={{ animationDelay: "0.5s" }}
          >
            <div
              className="w-3.5 h-3.5 bg-terracotta rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="w-px h-4 bg-terracotta/50" />
            <span className="text-[10px] text-brown-light mt-0.5 whitespace-nowrap">
              пр. Достык
            </span>
          </div>
          <div className="absolute top-[62%] right-[22%] flex flex-col items-center">
            <div
              className="w-3.5 h-3.5 bg-terracotta rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="w-px h-4 bg-terracotta/50" />
            <span className="text-[10px] text-brown-light mt-0.5 whitespace-nowrap">
              ул. Жандосова
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center opacity-40">
              <svg
                className="w-10 h-10 text-brown-light mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <p className="text-brown-light text-xs">
                Интерактивная карта скоро появится
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
