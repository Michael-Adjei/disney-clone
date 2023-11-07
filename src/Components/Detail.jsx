import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';

const Detail = () => {
  const [detail,setDetail] = useState({})
   const location = useLocation()
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

  useEffect(()=>{
     setDetail(location.state.item)
  },[])
  return (
    <div className=' bg-black w-screen h-screen'>
      <Header/>
      <div className='p-10  md:flex  mt-10 gap-10 md:p-16 '>
          <div>
          <img src={IMAGE_BASE_URL+detail.backdrop_path} alt='movie pictures' className=' md:w-[100vw]
           rounded-xl shadow-xl '/>
          </div>
           <div className='w-full flex flex-col gap-5 '>
                <h2 className='text-2xl font-extrabold'>{detail.original_title}</h2>
                <p className=' text-gray-400' >{detail.overview}</p>
                <p className=' text-gray-400' ><span className='text-gray-300'>Release Date</span> : {detail.release_date}</p>
          </div>
          </div>
    </div>
  )
}

export default Detail
