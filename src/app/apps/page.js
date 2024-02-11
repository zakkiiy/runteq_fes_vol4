'use client'
import Image from 'next/image'
import Link from 'next/link';
import appsData from '../data/appsData'
import {useState} from 'react'

const App = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const filteredData = appsData.filter(data =>
    selectedCategory === '全て' || data.category === selectedCategory
  );

  return(
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        <a onClick={() => setSelectedCategory('全て')} className={`tab ${selectedCategory === '全て' ? 'tab-active' : ''}`}>全て</a>
        <a onClick={() => setSelectedCategory('現役エンジニア')} className={`tab ${selectedCategory === '現役エンジニア' ? 'tab-active' : ''}`}>現役エンジニア</a>
        <a onClick={() => setSelectedCategory('ルーキー')} className={`tab ${selectedCategory === 'ルーキー' ? 'tab-active' : ''}`}>ルーキー</a>
        <a onClick={() => setSelectedCategory('Newcomer')} className={`tab ${selectedCategory === 'Newcomer' ? 'tab-active' : ''}`}>Newcomer</a>
        <a onClick={() => setSelectedCategory('チーム開発')} className={`tab ${selectedCategory === 'チーム開発' ? 'tab-active' : ''}`}>チーム開発</a>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredData.map((data) => (
          <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Link href={data.url} passHref target="_blank">
                <Image
                  src={data.appImg}
                  alt="桜の背景"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </Link>
            </figure>
            
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button
                  
                  className="btn btn-primary"
                >
                  詳細を見にいく
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App