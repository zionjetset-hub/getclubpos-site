"use client";

import { useMemo } from "react";

const FOODS = [
  "🍕",
  "🍔",
  "🌭",
  "🍟",
  "🍿",
  "🥨",
  "🥐",
  "🍩",
  "🍪",
  "🧁",
  "🍦",
  "🌮",
  "🌯",
  "🥪",
  "🥙",
  "🍱",
  "🍣",
  "🍜",
  "🍝",
  "🥗",
  "🍎",
  "🍊",
  "🍋",
  "🍇",
  "🍓",
  "🥑",
  "🌽",
  "🥓",
  "🧀",
  "🍫",
  "🍬",
  "🍭",
  "🥤",
  "☕",
  "🧃",
  "🥟",
  "🍤",
  "🥞",
  "🧇",
  "🍖",
  "🍗",
  "🥯",
  "🫓",
  "🥜",
  "🍡",
  "🥮",
  "🧋",
  "🍙",
  "🥡",
  "🍢",
] as const;

const ITEM_COUNT = 55;

type RainItem = {
  id: number;
  emoji: string;
  left: string;
  duration: number;
  delay: number;
  size: number;
  drift: number;
};

function createRainItems(): RainItem[] {
  return Array.from({ length: ITEM_COUNT }, (_, index) => {
    const food = FOODS[index % FOODS.length];
    const left = ((index * 17 + (index % 11) * 9) % 100) + (index % 3) * 0.3;

    return {
      id: index,
      emoji: food,
      left: `${left}%`,
      duration: 9 + (index % 14),
      delay: -((index * 1.7) % 22),
      size: 1.1 + (index % 6) * 0.18,
      drift: -30 + (index % 7) * 10,
    };
  });
}

export default function FoodRain() {
  const items = useMemo(() => createRainItems(), []);

  return (
    <div className="food-rain" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="food-rain__item"
          style={
            {
              left: item.left,
              fontSize: `${item.size}rem`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              "--food-drift": `${item.drift}px`,
            } as React.CSSProperties
          }
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
