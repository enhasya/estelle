"use client";

import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Spinner = ({ name, options }) => {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (!spinning) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const optionCounts = options.reduce((acc, option) => {
        acc[option] = (acc[option] || 0) + 1;
        return acc;
      }, {});
      const labels = Object.keys(optionCounts);
      const data = Object.values(optionCounts);
      const backgroundColors = data.map(
        (_, index) =>
          `rgba(${Math.floor((255 / labels.length) * index)}, ${Math.floor(
            (255 / labels.length) * index
          )}, ${Math.floor((255 / labels.length) * index)}, 0.6)`
      );

      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [options, spinning]);

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
      <div className="hidden lg:flex mt-4">
        <canvas ref={chartRef} width="360" height="360" />
      </div>
      <p className="font-bold text-sm text-white mt-4">
        {results.length > 0 &&
          results.map((result, index) => (
            <span key={index}>
              {result}
              {index !== results.length - 1 && ", "}
            </span>
          ))}
      </p>
    </main>
  );
};

export default Spinner;
