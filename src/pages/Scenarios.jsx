import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const scenarios = [
  {
    title: "DDoS-атака",
    description:
      "На сервер поступает аномально большой поток трафика. Сайт начинает тормозить.",
    options: [
      { text: "Ничего не делать", correct: false },
      { text: "Включить Firewall", correct: true },
      { text: "Перезагрузить сервер", correct: false },
    ],
    explanation:
      "Firewall фильтрует вредоносный трафик и помогает защититься от DDoS.",
  },
  {
    title: "Фишинговое письмо",
    description:
      "Вы получили письмо: «Ваш аккаунт заблокирован. Срочно перейдите по ссылке».",
    options: [
      { text: "Перейти по ссылке", correct: false },
      { text: "Отметить как фишинг", correct: true },
      { text: "Ответить отправителю", correct: false },
    ],
    explanation:
      "Фишинговые письма нужно сразу помечать и не взаимодействовать с ними.",
  },
  {
    title: "Подозрительный вход",
    description:
      "В систему выполнен вход из другой страны с неизвестного устройства.",
    options: [
      { text: "Игнорировать", correct: false },
      { text: "Включить 2FA и сменить пароль", correct: true },
      { text: "Просто выйти из аккаунта", correct: false },
    ],
    explanation:
      "Смена пароля и включение 2FA предотвращают повторный взлом.",
  },
];

export default function Scenarios() {
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (isCorrect) => {
    setResult(isCorrect);
  };

  const nextScenario = () => {
    setResult(null);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-10">
      <Link
        to="/"
        className="inline-block mb-8 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
      >
        ← На главную
      </Link>

      {current < scenarios.length ? (
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h1 className="text-3xl font-bold mb-4 text-yellow-300">
            {scenarios[current].title}
          </h1>

          <p className="text-gray-300 mb-6">
            {scenarios[current].description}
          </p>

          <div className="flex flex-col gap-4">
            {scenarios[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.correct)}
                disabled={result !== null}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-left"
              >
                {opt.text}
              </button>
            ))}
          </div>

          {result !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 rounded-xl bg-black/40"
            >
              <p
                className={`font-bold ${
                  result ? "text-green-400" : "text-red-400"
                }`}
              >
                {result ? "✔ Верное решение!" : "✖ Неверно"}
              </p>
              <p className="text-gray-300 mt-2">
                {scenarios[current].explanation}
              </p>

              <button
                onClick={nextScenario}
                className="mt-4 px-6 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
              >
                Далее
              </button>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            🎉 Все сценарии пройдены!
          </h2>
          <p className="text-gray-300">
            Ты отлично справился с защитой сети.
          </p>
        </div>
      )}
    </div>
  );
}
