import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
      <h1 className="text-9xl font-bold text-yellow-400 mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-4">Страница не найдена</h2>
      <p className="text-lg mb-8">
        Упс! Кажется, такой страницы <span className="text-pink-400 font-semibold">NetDefender</span> не существует.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;

