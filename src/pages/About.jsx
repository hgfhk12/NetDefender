import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans overflow-hidden">

      
      <section className="relative py-36 px-6 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]" />
        <div className="absolute inset-0 bg-black/30" />

        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-white/10 backdrop-blur border border-white/20
                       text-sm hover:bg-white/20 transition"
          >
            ← На главную
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            О проекте{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              NetDefender
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Учебная платформа по анализу угроз и защите сетей
          </p>
        </motion.div>
      </section>

      
      <section className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            <span className="text-yellow-300 font-semibold">NetDefender</span> —
            учебный проект для изучения{" "}
            <span className="text-pink-400 font-semibold">информационной безопасности</span>.
            Он демонстрирует анализ сетевого трафика, сценарии атак,
            работу логов и базовые механизмы защиты в понятной форме.
          </p>
        </motion.div>
      </section>

      
      <section className="py-28 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          Чем полезен проект
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            ["🎓", "Обучение ИБ", "Понимание атак, логов, защиты и принципов безопасности"],
            ["🧪", "Практика", "Викторины, сценарии атак и анализ угроз"],
            ["🧠", "Мышление аналитика", "Развитие навыков принятия решений"],
            ["🛡️", "Реальные сценарии", "Имитация атак и поведения систем"],
            ["💼", "Портфолио", "Готовый учебный кейс для показов"],
            ["🚀", "Современный стек", "React + анимации + SPA-архитектура"],
          ].map(([icon, title, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                         backdrop-blur-xl shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                {icon} {title}
              </h3>
              <p className="text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="py-28 px-6 bg-white/5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          На чём сделан проект
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            ["⚛️ React", "Компоненты, состояние, логика"],
            ["🧭 React Router", "Навигация между страницами"],
            ["🎨 Tailwind CSS", "Дизайн, адаптив, скорость"],
            ["🎞 Framer Motion", "Анимации и плавные эффекты"],
            ["📜 JavaScript ES6+", "Логика и взаимодействие"],
            ["🌐 SPA", "Без перезагрузок страницы"],
          ].map(([title, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                         backdrop-blur-xl shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-yellow-300">
                {title}
              </h3>
              <p className="text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-10">
            Продолжи изучение
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              ["/quiz", "🎯 Викторина", "bg-yellow-400 text-black"],
              ["/tips", "💡 Советы", "bg-green-400 text-black"],
              ["/scenarios", "⚠️ Сценарии атак", "border border-white/20"],
              ["/logs", "🛡 База угроз", "bg-red-500/20 border border-red-400/30 text-red-200"],
              ["/password-check", "🔑 Генератор паролей", "bg-yellow-400 text-black"],
              ["/faq", "❓ FAQ", "bg-blue-500 text-black"],
              ["/news", "📰 Новости кибербезопасности", "bg-purple-400 text-black"],

            ].map(([to, label, cls], i) => (
              <Link key={i} to={to}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-7 py-4 rounded-xl font-bold shadow-lg transition ${cls}`}
                >
                  {label}
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>NetDefender — учебный проект по кибербезопасности</p>
        <p className="mt-2">© 2026 | Code-Forge</p>
      </footer>

    </div>
  );
}

