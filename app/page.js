"use client";

import { useState } from "react";
import Image from "next/image";

const { default: Spinner } = require("../components/spinner");
const { default: Name } = require("../shared/icons/user-profile-03-white.svg");

export default function Home() {
  const [name, setName] = useState("");
  const [spinNumber, setSpinNumber] = useState(1);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNextSpinner = () => {
    setSpinNumber(spinNumber + 1);
  };

  const choice = (spinNumber) => {
    switch (spinNumber) {
      case 1:
        return {
          section: ["What creature you are?"],
          options: [
            "Peasant",
            "Goblin",
            "Kobold",
            "Imp",
            "Zombie",
            "Skeleton",
            "Ghoul",
            "Specter",
            "Wraith",
            "Demonling",
            "Lesser Demon",
            "Elemental Sprout",
            "Young Dragon",
            "Harpy",
            "Ogre",
            "Troll",
            "Vampire Spawn",
            "Werewolf",
            "Gorgon",
            "Giant",
            "Vampire",
            "Lich",
            "Dragon",
            "Archdemon",
            "Elder Dragon",
            "Celestial Being",
            "Primordial Entity",
          ],
        };
      case 2:
        return {
          section: ["How much power you have?"],
          options: [
            "Powerless",
            "Limited Power",
            "Beginner Level",
            "Novice Level",
            "Basic Power",
            "Moderate Power",
            "Average Power",
            "Above Average Power",
            "Intermediate Level",
            "Skilled Power",
            "Advanced Level",
            "Strong Power",
            "Exceptional Power",
            "Master Level",
            "High Power",
            "Elite Level",
            "Legendary Level",
            "Transcendent Level",
            "Divine Level",
          ],
        };
      case 3:
        return <p>Spin the wheel to get a random animal</p>;
      default:
        return [];
    }
  };

  return (
    <main className="flex flex-col w-full h-screen items-center justify-center p-8">
      <div className="flex flex-col w-full h-auto items-center justify-center">
        <p className="font-bold text-lg text-white">Estelle</p>
        <p className="font-medium text-sm text-white/60">
          Season 1 - Fate's Turning
        </p>
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-row gap-4 w-full h-auto items-center justify-center">
          <div className="bg-white/5 flex flex-row gap-4 items-center justify-center w-full lg:w-80 p-4 rounded-lg mt-4">
            <Image src={Name} width="16" height="16" />
            <input
              onChange={handleName}
              className="bg-transparent text-white w-full font-medium text-sm outline-none"
              type="text"
              value={name}
              placeholder="Enter your name"
            />
          </div>
          <button
            onClick={handleNextSpinner}
            className="bg-white/5 transition-all hover:bg-white/10 flex flex-row gap-4 items-center justify-center w-auto p-4 rounded-lg mt-4"
          >
            <p className="font-bold text-sm text-white">Next</p>
          </button>
        </div>
        {name && (
          <div className="mt-4 text-center">
            <p className="font-bold text-sm text-white">
              {choice(spinNumber).section}
            </p>
            <Spinner name={name} options={choice(spinNumber).options} />
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-between">
        <p className="font-bold text-sm text-white/60">@enhasya</p>
        <p className="font-bold text-sm text-white/60">2024</p>
      </div>
    </main>
  );
}
