// src/App.tsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenue sur ton projet <br></br> <span className="text-blue-400">Vite + React + TS</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Ce template utilise <span className="font-semibold">TailwindCSS</span> pour le style.  
          Tu peux commencer à coder directement en modifiant <code>App.tsx</code>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all shadow-lg"
          >
            Compteur {count}
          </button>
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition-all shadow-lg"
          >
            Documentation Vite
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition-all shadow-lg"
          >
            Documentation React
          </a>
        </div>
      </div>
      <footer className="mt-12 text-gray-500 text-sm">
        Fait avec ❤️ et TailwindCSS
      </footer>
    </div>
  );
}