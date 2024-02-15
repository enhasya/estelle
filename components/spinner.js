import React, { useState } from "react";

const Spinner = () => {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState({});

  const wheelSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const result = options[randomIndex];
      setResults([...results, result]);
      setSpinning(false);
    }, 3000);
  };

  return <div>Spinner</div>;
};

export default Spinner;
