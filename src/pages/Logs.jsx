import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const threats = [
  {
    name: "Phishing",
    danger: "Высокий",
    color: "bg-red-500/20 text-red-300",
    description:
      "Фишинг — это попытка обманом получить логины, пароли или данные карт через поддельные сайты, письма или сообщения.",
    protection:
      "Проверять URL, не открывать подозрительные ссылки, использовать 2FA.",
  },
  {
    name: "Brute Force",
    danger: "Средний",
    color: "bg-orange-500/20 text-orange-300",
    description:
      "Атака перебором паролей для подбора доступа к аккаунтам и системам.",
    protection:
      "Сложные пароли, лимит попыток входа, CAPTCHA, 2FA.",
  },
  {
    name: "SQL Injection",
    danger: "Критический",
    color: "bg-red-600/30 text-red-200",
    description:
      "Внедрение вредоносных SQL-запросов через формы и URL для кражи или изменения данных в базе.",
    protection:
      "Prepared Statements, ORM, фильтрация и валидация входных данных.",
  },
  {
    name: "XSS (Cross-Site Scripting)",
    danger: "Высокий",
    color: "bg-red-500/20 text-red-300",
    description:
      "Внедрение вредоносного JavaScript-кода на сайт для кражи cookies и данных пользователей.",
    protection:
      "Экранирование данных, Content Security Policy (CSP).",
  },
  {
    name: "Malware",
    danger: "Высокий",
    color: "bg-red-500/20 text-red-300",
    description:
      "Вредоносное ПО (вирусы, трояны, spyware), способное красть данные или управлять системой.",
    protection:
      "Антивирус, обновления ОС, установка ПО из доверенных источников.",
  },
  {
    name: "Ransomware",
    danger: "Критический",
    color: "bg-red-600/30 text-red-200",
    description:
      "Шифрует файлы пользователя и требует выкуп за восстановление доступа.",
    protection:
      "Резервные копии, обновления, осторожность с файлами и ссылками.",
  },
  {
    name: "DDoS",
    danger: "Высокий",
    color: "bg-red-500/20 text-red-300",
    description:
      "Перегрузка сервера огромным количеством запросов, из-за чего сервис падает.",
    protection:
      "Rate limiting, CDN, анти-DDoS сервисы.",
  },
  {
    name: "Man-in-the-Middle (MITM)",
    danger: "Высокий",
    color: "bg-red-500/20 text-red-300",
    description:
      "Перехват данных между пользователем и сервером (часто в публичных Wi-Fi).",
    protection:
      "HTTPS, VPN, не использовать открытые Wi-Fi без защиты.",
  },
  {
    name: "Credential Stuffing",
    danger: "Средний",
    color: "bg-orange-500/20 text-orange-300",
    description:
      "Использование украденных логинов и паролей с других сайтов для входа в аккаунты.",
    protection:
      "Уникальные пароли, менеджеры паролей, 2FA.",
  },
  {
    name: "Zero-Day",
    danger: "Критический",
    color: "bg-red-600/30 text-red-200",
    description:
      "Атака через неизвестную уязвимость, для которой ещё нет патча.",
    protection:
      "Обновления, IDS/IPS системы, минимизация прав доступа.",
  },
];

export default function Logs() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30">
        <div className="absolute inset-0 bg-black/40" />

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-black mb-6">
            База угроз <span className="text-yellow-300">NetDefender</span>
          </h1>
          <p className="text-xl text-gray-200">
            Реальные кибератаки, вирусы и способы защиты
          </p>
        </motion.div>
      </section>

      
      <section className="py-28 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {threats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                         backdrop-blur-xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-yellow-300">
                  {item.name}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${item.color}`}
                >
                  {item.danger}
                </span>
              </div>

              <p className="text-gray-300 mb-4">
                <span className="text-white font-semibold">Описание:</span>{" "}
                {item.description}
              </p>

              <p className="text-gray-300">
                <span className="text-green-400 font-semibold">
                  Как защититься:
                </span>{" "}
                {item.protection}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>NetDefender — база знаний по кибербезопасности</p>
        <p className="mt-2">© 2026 | Code Forge</p>
      </footer>
    </div>
  );
}
