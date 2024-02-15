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
    <main>
      <p className="font-bold text-sm text-white">Hi, {name}</p>
      <div className={`wheel ${spinning ? "spin" : ""}`} />
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="font-bold text-sm text-white"
      >
        Spin the wheel
      </button>
      <p className="font-bold text-sm text-white">
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
