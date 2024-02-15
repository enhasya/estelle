"use client";

import React, { useState } from "react";

const Spinner = ({ name, options }) => {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState([]);

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const result = options[randomIndex];
      setResults([...results, result]);
      setSpinning(false);
    }, 3000);
  };

  return (
    <main className="flex flex-col w-full items-center">
      <div className={`wheel ${spinning ? "spin" : ""}`} />
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="bg-white/5 transition-all hover:bg-white/10 flex flex-row gap-4 items-center justify-center w-full lg:w-auto p-4 rounded-lg mt-4"
      >
        {" "}
        <p className="font-bold text-sm text-white">Spin the wheel, {name}</p>
      </button>
      <p className="font-bold text-sm text-white mt-4">
        {results.length > 0 &&
          results.map((result, index) => (
            <p key={index}>
              Spin {index + 1}:{result}
            </p>
          ))}
      </p>
    </main>
  );
};

export default Spinner;
