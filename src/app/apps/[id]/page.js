'use client'

import { useRouter, useSearchParams, useParams } from 'next/navigation';
import appsData from '@/app/data/appsData';

const AppDetail = () => {
  const params = useParams()
  const id = params.id
  const data = appsData.find(app => app.id.toString() === id);

  return(
    <div className="flex justify-center items-center min-h-screen" 
    style={{ backgroundImage: "url('/sakura_haikei.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
    <div className="bg-white bg-opacity-90 rounded-lg p-6 m-4 shadow-lg w-full max-w-2xl">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">{data.appName}</h1>
      <p className="text-lg mb-4"><span className="font-extrabold">制作者：</span>{data.name}</p>
      <a href={data.url} target="_blank" rel="noopener noreferrer"
         className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors mb-4">
        アプリを試す
      </a>
      <p className="mb-4"><span className="font-extrabold text-xl">アプリについて：</span><br/>{data.description}</p>
      <p className="mb-4"><span className="font-extrabold text-xl">力を入れたこと・工夫ポイント：</span><br/>{data.commnet}</p>
      <a href={data.githubUrl} target="_blank" rel="noopener noreferrer"
         className="inline-block bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition-colors">
        GitHub Repository
      </a>
    </div>
  </div>
  )
}

export default AppDetail