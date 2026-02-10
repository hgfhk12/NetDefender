import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tips = [
  {
    title: "Используй сложные пароли",
    description:
      "Создавай пароли минимум 12 символов с буквами, цифрами и символами. Никогда не используй один пароль для разных сервисов.",
    icon: "🔑",
  },
  {
    title: "Двухфакторная аутентификация",
    description:
      "Включай 2FA на всех аккаунтах — это добавляет дополнительный уровень защиты.",
    icon: "📲",
  },
  {
    title: "Осторожно с письмами",
    description:
      "Не открывай подозрительные письма и вложения. Фишинг — одна из самых популярных атак.",
    icon: "📧",
  },
  {
    title: "Обновляй ПО",
    description:
      "Регулярно обновляй операционную систему и программы — патчи закрывают уязвимости.",
    icon: "💻",
  },
  {
    title: "Используй антивирус",
    description:
      "Антивирус помогает обнаружить вредоносное ПО и защитить систему.",
    icon: "🛡️",
  },
  {
    title: "Не подключайся к сомнительным сетям",
    description:
      "Wi-Fi в кафе или общественных местах может быть опасен. Используй VPN для безопасности.",
    icon: "📡",
  },
];

export default function Tips() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      
      <header className="relative py-10 px-6 text-center bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-pink-600/30">
        <Link
          to="/"
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-sm text-white hover:bg-white/20 transition-all duration-300"
        >
          ← На главную
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-yellow-300"
        >
          Советы по кибербезопасности
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto"
        >
          Применяй эти простые советы, чтобы защитить себя и свои данные в сети.
        </motion.p>
      </header>

      
      <main className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className="text-gray-300">{tip.description}</p>
          </motion.div>
        ))}
      </main>

      
      <footer className="py-10 text-center text-gray-500 text-sm">
        NetDefender — учебный проект по кибербезопасности | © 2026
      </footer>
    </div>
  );
}
