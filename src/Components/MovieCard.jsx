import React from 'react'
import { useNavigate } from 'react-router-dom';



const MovieCard = ({movie}) => {

 const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
 const navigate = useNavigate();
 
   const root = movie.title
 

 const handleDetails =()=> {
  navigate(`/detail/${root}`, {
    state : {
      item : movie,
 }
   
  })
  console.log(movie)
 }
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} alt='movies'
      className='w-[110px] md:w-[200px] object-contain rounded-xl hover:border-[4px]
       border-gray-400 hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer '
       onClick={()=>handleDetails()} />
    </>
  )
}

export default MovieCard
