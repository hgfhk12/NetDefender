import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const news = [
  {
    title: "Новая уязвимость в Windows 11",
    date: "2026-02-04",
    level: "critical",
    description:
      "Обнаружена критическая уязвимость, позволяющая выполнять произвольный код и получить полный контроль над системой.",
    protection:
      "Обновите систему до последней версии, включите автоматические обновления, используйте антивирус и firewall.",
  },
  {
    title: "Массовый фишинг через email",
    date: "2026-02-03",
    level: "high",
    description:
      "Хакеры рассылают поддельные письма от известных сервисов для кражи паролей и банковских данных.",
    protection:
      "Проверяйте адрес отправителя, не переходите по подозрительным ссылкам, включите двухфакторную аутентификацию.",
  },
  {
    title: "DDoS атака на популярный игровой сервер",
    date: "2026-02-01",
    level: "medium",
    description:
      "Сервер оказался перегружен большим количеством запросов, что привело к недоступности игрового сервиса.",
    protection:
      "Используйте CDN, rate limiting, системы фильтрации трафика и резервные серверы.",
  },
  {
    title: "Распространение нового вредоносного ПО",
    date: "2026-01-28",
    level: "high",
    description:
      "Вредоносная программа способна красть учетные данные и шифровать файлы для вымогательства.",
    protection:
      "Не скачивайте файлы из сомнительных источников, используйте антивирус и регулярно делайте бэкапы.",
  },
  {
    title: "Brute Force атака на аккаунты социальных сетей",
    date: "2026-01-25",
    level: "medium",
    description:
      "Злоумышленники используют автоматизированный перебор паролей для взлома аккаунтов.",
    protection:
      "Используйте сложные пароли, ограничение попыток входа и двухфакторную аутентификацию.",
  },
  {
    title: "SQL Injection в популярном веб-приложении",
    date: "2026-01-22",
    level: "critical",
    description:
      "Атака внедрением вредоносного SQL-кода, позволяющая получить доступ к базе данных и конфиденциальной информации.",
    protection:
      "Используйте prepared statements, фильтрацию и валидацию всех входных данных.",
  },
];

export default function CyberNews() {
  const getLevelColor = (level) => {
    switch (level) {
      case "critical":
        return "bg-red-500/20 border-red-400 text-red-300";
      case "high":
        return "bg-yellow-500/20 border-yellow-400 text-yellow-300";
      case "medium":
        return "bg-orange-500/20 border-orange-400 text-orange-300";
      default:
        return "bg-green-500/20 border-green-400 text-green-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans p-6">
        <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-6 left-6 z-20"
                >
                  <Link
                    to="/"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20
                               backdrop-blur text-sm hover:bg-white/20 transition"
                  >
                    ← На главную
                  </Link>
                </motion.div>
      <section className="relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Новости кибербезопасности
          </h1>
          <p className="text-gray-300 text-lg">
            Актуальные атаки, вирусы и способы защиты. Учебная база знаний.
          </p>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition ${getLevelColor(item.level)}`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="text-sm px-3 py-1 rounded-full border">
                  {item.level.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-400 mb-2 text-sm">{item.date}</p>
              <p className="text-gray-300 mb-3">
                <span className="font-semibold">Описание:</span> {item.description}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-green-400">Как защититься:</span>{" "}
                {item.protection}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>NetDefender — учебная база знаний по киберугрозам</p>
        <p className="mt-2">© 2026 | Code-Forge</p>
      </footer>

    </div>
  );
}
