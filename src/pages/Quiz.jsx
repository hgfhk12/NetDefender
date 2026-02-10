import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Quiz() {
  const questions = [
    {
      question: "Что делает IDS?",
      options: [
        { text: "Обнаруживает атаки", correct: true },
        { text: "Блокирует трафик", correct: false },
        { text: "Отслеживает пользователей", correct: false },
      ],
    },
    {
      question: "Что такое VPN?",
      options: [
        { text: "Система защиты от вирусов", correct: false },
        { text: "Виртуальная частная сеть", correct: true },
        { text: "Программа для мониторинга сети", correct: false },
      ],
    },
    {
      question: "Что делает Firewall?",
      options: [
        { text: "Блокирует подозрительный трафик", correct: true },
        { text: "Отправляет отчеты администратору", correct: false },
        { text: "Создает пользователей", correct: false },
      ],
    },
    {
      question: "Что делает Access Control?",
      options: [
        { text: "Контролирует доступ пользователей", correct: true },
        { text: "Фильтрует трафик", correct: false },
        { text: "Анализирует лог-файлы", correct: false },
      ],
    },
    {
      question: "Для чего нужен мониторинг сети?",
      options: [
        { text: "Для развлечения", correct: false },
        { text: "Для отслеживания состояния сети и событий", correct: true },
        { text: "Для создания паролей", correct: false },
      ],
    },
    {
      question: "Что такое DDoS?",
      options: [
        { text: "Массовая атака на сеть", correct: true },
        { text: "Антивирусная программа", correct: false },
        { text: "Встроенный брандмауэр", correct: false },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null); 
  const [isCorrect, setIsCorrect] = useState(null); 
  const handleAnswer = (option, idx) => {
    setSelected(idx);
    setIsCorrect(option.correct);

    if (option.correct) setScore(score + 1);

    
    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 800); 
  };

  const getResultText = () => {
    if (score === questions.length) return "🟡 Идеально! Σ – уровень мастера NetDefender!";
    if (score >= 4) return "🟢 Отлично! У тебя высокий уровень знаний.";
    if (score >= 2) return "🟠 Неплохо, но есть куда расти.";
    return "🔴 Нужно потренироваться, попробуй ещё раз!";
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans flex flex-col">

      
      <header className="relative py-10 px-6 text-center bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-pink-600/30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-sm text-white hover:bg-white/20 transition-all duration-300"
          >
            ← На главную
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black"
        >
          Викторина <span className="text-yellow-300">NetDefender</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-200 text-lg"
        >
          Проверь свои знания по кибербезопасности!
        </motion.p>
      </header>

      
      <main className="flex-1 flex flex-col justify-center px-6 py-16 max-w-3xl mx-auto w-full">
        {!showResult ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-yellow-300">
              Вопрос {current + 1} из {questions.length}
            </h2>
            <p className="text-gray-300 text-lg mb-6">{questions[current].question}</p>

            <div className="flex flex-col gap-4">
              {questions[current].options.map((option, idx) => {
                
                let bgClass = "bg-white/10 hover:bg-white/20";
                if (selected === idx) {
                  bgClass = isCorrect ? "bg-green-500" : "bg-red-500";
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(option, idx)}
                    className={`${bgClass} text-left px-6 py-3 rounded-xl transition`}
                  >
                    {option.text}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Результат</h2>
            <p className="text-gray-300 text-lg mb-6">
              Вы ответили правильно на {score} из {questions.length} вопросов
            </p>
            <p className="text-xl font-semibold mb-6">{getResultText()}</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              ← На главную
            </Link>
          </motion.div>
        )}
      </main>

      
      <footer className="py-10 text-center text-gray-500 text-sm">
        NetDefender — учебный проект по кибербезопасности | © 2026
      </footer>
    </div>
  );
}
