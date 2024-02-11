'use client'

import { useRouter, useSearchParams, useParams } from 'next/navigation';
import appsData from '@/app/data/appsData';

const AppDetail = () => {
  const params = useParams()
  const id = params.id
  const data = appsData.find(app => app.id.toString() === id);

  return(
    <div>
      <h1>{data.name}</h1>
      <p>{data.url}</p>
      <p>{data.commnet}</p>
    </div>
  )
}

export default AppDetail