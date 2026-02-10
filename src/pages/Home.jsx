import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "🔐",
      title: "Firewall",
      color: "text-green-300",
      text: "Фильтрация трафика и блокировка подозрительных соединений.",
    },
    {
      icon: "🕵️",
      title: "IDS / IPS",
      color: "text-pink-400",
      text: "Выявление атак и мгновенная реакция на угрозы.",
    },
    {
      icon: "📊",
      title: "Мониторинг",
      color: "text-blue-300",
      text: "Сбор логов и анализ состояния сети.",
    },
    {
      icon: "🔑",
      title: "Access Control",
      color: "text-yellow-300",
      text: "Контроль доступа и защита учетных записей.",
    },
    {
      icon: "⚡",
      title: "Анализ трафика",
      color: "text-purple-400",
      text: "Проверка сетевых потоков в реальном времени.",
    },
    {
      icon: "💾",
      title: "Логирование",
      color: "text-orange-400",
      text: "Фиксация событий и инцидентов безопасности.",
    },
    {
      icon: "🛡️",
      title: "Защита от DDoS",
      color: "text-cyan-400",
      text: "Имитация защиты от распределённых атак.",
    },
    {
      icon: "🤖",
      title: "AI / ML",
      color: "text-red-400",
      text: "Экспериментальный анализ угроз с помощью ИИ.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans overflow-hidden">

      
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]" />

        
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              NetDefender
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block mb-6 px-4 py-1 rounded-full
                       bg-white/10 border border-white/20
                       text-sm text-gray-200 backdrop-blur"
          >
            🎓 Учебный проект по кибербезопасности
          </motion.div>

          <p className="text-2xl md:text-3xl text-gray-200 mb-6">
            Платформа для изучения{" "}
            <span className="text-pink-400 font-semibold">кибербезопасности</span>
          </p>

          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Анализ атак, защита сети, логи, пароли и практические сценарии.
          </p>

          
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            <Link to="/quiz">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold shadow-lg">
                🧠 Викторина
              </motion.button>
            </Link>

            <Link to="/scenarios">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-red-400 text-black font-bold shadow-lg">
                💥 Сценарии атак
              </motion.button>
            </Link>

            <Link to="/logs">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-200 backdrop-blur">
                🛡 База угроз
              </motion.button>
            </Link>

            <Link to="/password-check">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-yellow-300 text-black font-bold shadow-lg">
                🔑 Пароли
              </motion.button>
            </Link>

            <Link to="/tips">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-green-400 text-black font-bold shadow-lg">
                ✅ Советы
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10">
                ℹ️ О проекте
              </motion.button>
            </Link>

            <Link to="/faq">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-xl bg-blue-500 text-black font-bold hover:bg-blue-400 transition shadow-lg"
  >
    ❓ FAQ
  </motion.button>
</Link>

<Link to="/news">
  <motion.button
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10"
  >
    📰 Новости кибербезопасности
  </motion.button>
</Link>

          </div>
        </motion.div>
          
      </section>

      
      <section className="py-28 px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          Возможности <span className="text-yellow-300">NetDefender</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10
                         rounded-2xl p-8 shadow-xl
                         hover:border-yellow-400/40 hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-2xl mb-4 flex gap-2">
                <span className="text-3xl">{item.icon}</span>
                <span className={item.color}>{item.title}</span>
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="py-28 px-6 bg-white/5">
        <h2 className="text-4xl font-bold text-center mb-16">
          Чему ты научишься
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Понимать реальные атаки",
            "Анализировать сетевой трафик",
            "Работать с логами",
            "Защищать системы",
            "Создавать надёжные пароли",
            "Мыслить как специалист ИБ",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-black/30 border border-white/10"
            >
              ✔ {text}
            </motion.div>
          ))}
        </div>
      </section>

      
      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>NetDefender — учебный проект по кибербезопасности</p>
        <p className="mt-2">© 2026 | Code-Forge</p>
      </footer>
    </div>
  );
}
