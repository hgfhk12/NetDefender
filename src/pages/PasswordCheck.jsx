import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PasswordCheck() {
  const [password, setPassword] = useState("");

  const checks = {
    length8: password.length >= 8,
    length12: password.length >= 12,
    number: /\d/.test(password),
    upper: /[A-Z]/.test(password),
    special: /[!@#$%^&*()_+=\-]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  const strength =
    score <= 2 ? "weak" : score <= 4 ? "medium" : "strong";

  const colors = {
    weak: "bg-red-500",
    medium: "bg-yellow-400",
    strong: "bg-green-500",
  };

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < 14; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(result);
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-6 py-20">

      <Link
        to="/"
        className="inline-block mb-10 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
      >
        ← На главную
      </Link>

      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🔑 Проверка надёжности пароля
        </h1>

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 mb-4 outline-none"
        />

        
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden mb-4">
          <div
            className={`h-full ${colors[strength]} transition-all`}
            style={{ width: `${(score / 5) * 100}%` }}
          />
        </div>

        <p className="mb-6 text-center">
          Надёжность:{" "}
          <span
            className={
              strength === "weak"
                ? "text-red-400"
                : strength === "medium"
                ? "text-yellow-400"
                : "text-green-400"
            }
          >
            {strength === "weak"
              ? "Слабый"
              : strength === "medium"
              ? "Средний"
              : "Надёжный"}
          </span>
        </p>

        
        <ul className="space-y-2 text-sm mb-6">
          <li className={checks.length8 ? "text-green-400" : "text-gray-400"}>
            • Минимум 8 символов
          </li>
          <li className={checks.length12 ? "text-green-400" : "text-gray-400"}>
            • Желательно 12+ символов
          </li>
          <li className={checks.number ? "text-green-400" : "text-gray-400"}>
            • Есть цифры
          </li>
          <li className={checks.upper ? "text-green-400" : "text-gray-400"}>
            • Есть заглавные буквы
          </li>
          <li className={checks.special ? "text-green-400" : "text-gray-400"}>
            • Есть спецсимволы
          </li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePassword}
          className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          Сгенерировать надёжный пароль
        </motion.button>
      </div>
    </div>
  );
}
