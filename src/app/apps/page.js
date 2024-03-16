'use client'
import Image from 'next/image'
import Link from 'next/link';
import appsData from '../data/appsData'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const App = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const filteredData = appsData.filter(data =>
    selectedCategory === '全て' || data.category === selectedCategory
  );

  const detailHandleClick = (id) => {
    window.open(`/apps/${id}`, '_blank');
  };

  return(
    <div style={{ backgroundImage: "url('sakura_haikei.jpg')", backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div role="tablist" className="tabs tabs-boxed overflow-x-auto">
        <a onClick={() => setSelectedCategory('全て')} className={`tab ${selectedCategory === '全て' ? 'tab-active' : ''}`}>全て</a>
        <a onClick={() => setSelectedCategory('現役エンジニア')} className={`tab ${selectedCategory === '現役エンジニア' ? 'tab-active' : ''}`}>現役エンジニア</a>
        <a onClick={() => setSelectedCategory('ルーキー')} className={`tab ${selectedCategory === 'ルーキー' ? 'tab-active' : ''}`}>ルーキー</a>
        <a onClick={() => setSelectedCategory('Newcomer')} className={`tab ${selectedCategory === 'Newcomer' ? 'tab-active' : ''}`}>Newcomer</a>
        <a onClick={() => setSelectedCategory('チーム開発')} className={`tab ${selectedCategory === 'チーム開発' ? 'tab-active' : ''}`}>チーム開発</a>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredData.map((data) => (
          <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10" style={{ width: '400px', height: '300px' }}>
              <div className="relative">
                <Link href={data.url} passHref target="_blank">
                  <div className="block relative cursor-pointer">
                    <Image
                      src={data.appImg}
                      alt="app image"
                      width={500}
                      height={300}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 rounded-xl transition-all">                      
                    </div>
                  </div>
                </Link>
              </div>
            </figure>
            
            <div className="card-body items-center text-center">
            <h2 className="card-title">{data.class}</h2>
              <h2 className="card-title text-black-900">{data.name}</h2>
              <h2 className="card-title text-pink-500">{data.appName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button
                  onClick={() => detailHandleClick(data.id)}
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