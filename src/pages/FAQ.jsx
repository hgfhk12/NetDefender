import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const faqData = [
  {
    q: "Что такое информационная безопасность (ИБ)?",
    a: "Информационная безопасность — это защита данных, систем и сетей от утечек, взломов и атак."
  },
  {
    q: "Что такое логи?",
    a: "Логи — это журналы событий, в которых фиксируются действия пользователей, ошибки и попытки атак."
  },
  {
    q: "Что такое 2FA?",
    a: "2FA — двухфакторная аутентификация, дополнительный уровень защиты аккаунта."
  },
  {
    q: "Что такое SQL-инъекция?",
    a: "SQL Injection — атака через внедрение вредоносного кода в запросы к базе данных."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-20">

      <Link
        to="/"
        className="inline-block mb-10 px-4 py-2 rounded-lg
                   bg-white/10 border border-white/20 hover:bg-white/20 transition"
      >
        ← На главную
      </Link>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          FAQ <span className="text-yellow-300">NetDefender</span>
        </h1>
        <p className="text-gray-300">
          Часто задаваемые вопросы
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center
                           hover:bg-white/10 transition text-left"
              >
                <span className="font-semibold">{item.q}</span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>

              
              <motion.div
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scaleY: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0 }}
                className={`px-6 pb-4 text-gray-300 overflow-hidden ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.a}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
