'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import Confetti from 'react-confetti';

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const message = "ようこそ、RUNTEQ祭へ";

  useEffect(() => {
    // window オブジェクトのサイズを取得しかつ状態更新
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={50}
        colors={['#FFC0CB', '#FFB6C1', '#FF69B4']}
      />
      <div className="bg-sakura bg-cover text-center p-12">
        <h1 className="text-4xl font-bold">
          {message.split("").map((char, index) => (
            <span key={index} className="inline-block opacity-0 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}