"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const drinks = [
  {
    name: "Степной Латте",
    price: "1 200",
    description: "Двойной эспрессо с бархатным молоком и нотами карамели",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80",
  },
  {
    name: "Капучино Классик",
    price: "1 100",
    description: "Идеальный баланс эспрессо и воздушной молочной пены",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
  },
  {
    name: "Раф «Мёд и Лаванда»",
    price: "1 400",
    description: "Нежный сливочный кофе с натуральным мёдом и лавандой",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a1?w=400&q=80",
  },
  {
    name: "Флэт Уайт",
    price: "1 300",
    description: "Плотный бархатистый кофе с тонким слоем микропены",
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80",
  },
  {
    name: "Американо",
    price: "900",
    description: "Чистый вкус свежеобжаренного зерна без лишнего",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&q=80",
  },
  {
    name: "Матча Латте",
    price: "1 500",
    description: "Японский церемониальный матча на овсяном молоке",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
  },
  {
    name: "Какао «Алматинский»",
    price: "1 100",
    description: "Горячий шоколад из бельгийского какао с маршмеллоу",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80",
  },
  {
    name: "Эспрессо Доппио",
    price: "800",
    description: "Двойная порция эспрессо для настоящих ценителей",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-sand/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.3em] mb-4">
            Меню
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-6">
            Наши напитки
          </h2>
          <div className="w-16 h-px bg-terracotta/40 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-brown-dark leading-snug">
                    {drink.name}
                  </h3>
                  <span className="text-terracotta font-semibold whitespace-nowrap">
                    {drink.price} ₸
                  </span>
                </div>
                <p className="text-brown-light text-sm leading-relaxed">
                  {drink.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
