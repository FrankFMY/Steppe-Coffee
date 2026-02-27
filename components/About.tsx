"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    title: "Свежая обжарка",
    description:
      "Обжариваем зёрна каждую неделю на собственном ростере. Разницу вы почувствуете с первого глотка.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M8 26h16" />
        <path d="M10 26V14a6 6 0 0112 0v12" />
        <path d="M22 16h2a3 3 0 010 6h-2" />
        <path d="M14 9c.5-2 1.5-2 2 0s1.5 2 2 0" />
        <path d="M16 6c.5-2 1.5-2 2 0" />
      </svg>
    ),
  },
  {
    title: "Локальные поставщики",
    description:
      "Работаем с фермерами напрямую — от Эфиопии до Бразилии. Каждый сорт отобран лично нашим шеф-бариста.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M16 28V14" />
        <path d="M16 14c-4-4-8-2-10 2" />
        <path d="M16 14c4-4 8-2 10 2" />
        <path d="M16 18c-3-3-6-2-8 1" />
        <path d="M16 18c3-3 6-2 8 1" />
        <path d="M16 22c-2-2-4-1-5 1" />
        <path d="M16 22c2-2 4-1 5 1" />
      </svg>
    ),
  },
  {
    title: "Уютная атмосфера",
    description:
      "Тёплое дерево, мягкий свет и аромат свежего кофе. Место, куда хочется возвращаться снова и снова.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 28h22" />
        <path d="M8 28V16l8-10 8 10v12" />
        <rect x="13" y="21" width="6" height="7" />
        <rect x="11" y="14" width="4" height="4" rx="0.5" />
        <rect x="17" y="14" width="4" height="4" rx="0.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.3em] mb-4">
            О нас
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-8">
            Наша история
          </h2>
          <div className="w-16 h-px bg-terracotta/40 mx-auto mb-8" />
          <p className="text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            Steppe Coffee родился в 2019 году из простой идеи — дать Москве
            кофе, достойный этого города. Мы начинали с маленькой обжарочной, а
            сегодня у нас три кофейни и тысячи гостей, которые стали друзьями.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-10 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mb-6 group-hover:bg-terracotta/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-brown-dark mb-3">
                {item.title}
              </h3>
              <p className="text-brown-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
