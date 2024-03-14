'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti';
import Data from './data/appsData'
import { useRouter } from 'next/navigation'


export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const message = "ようこそ、\nRUNTEQ祭へ";
  const router = useRouter();
  
  const joinHandleClick = () => {
    router.push('/apps')
  }

  useEffect(() => {
    // window オブジェクトのサイズを取得しかつ状態更新
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div
    className="relative w-full h-full min-h-screen bg-white"
    style={{ backgroundImage: "url('/sakura_haikei.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
  >
    <div className="relative w-full h-full min-h-screen bg-white">
      {/* <div>{Data[1].name}</div> */}
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={50}
        colors={['#FFC0CB', '#FFB6C1', '#FF69B4']}
      />
      <div className="text-center p-12">
        <h1 className="text-4xl font-bold text-black message">
          {message.split("").map((char, index) => (
            <span key={index} className="inline-block opacity-0 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
      <div className="relative w-full h-full min-h-screen bg-white flex justify-center items-center">
        <button 
          onClick={joinHandleClick}
          className="btn bg-pink-500 text-white rounded-full btn-lg"
        >
          アプリを見に行く
        </button>
      </div>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><Image src="/sakura-background.jpg" alt="Album" width={100} height={100} /></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
}