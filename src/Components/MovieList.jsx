import React,{useState, useEffect,useRef} from 'react'
import { getMovieByGenreId } from '../extras/Api'
import MovieCard from './MovieCard';
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'




const MovieList = ({genreId,index_}) => {
  const elementRef = useRef(0);
  const dimension = window.innerWidth;
 const [movieList, setMovieList] = useState([]);
 const getMovieById = () =>{
      getMovieByGenreId(genreId).then((resp)=> (
        setMovieList(resp.data.results)
      ))
    }
 

    useEffect(()=> {
       getMovieById()
    },[])

    const sliderRight=(element)=> {
      element.scrollLeft+= dimension - 110;
      console.log(element)
    }
  
    const sliderLeft=(element)=>{
      element.scrollLeft-= dimension - 110;
    }

  return (
   
 <div className='relative'>

 
 <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10 '  ref={elementRef}>
 <BsFillCaretLeftFill size={32} className='hidden md:block absolute mx-8 
          mt-[150px] cursor-pointer' onClick={()=> sliderLeft(elementRef.current)}  />
          
         {
         
            movieList.map((item, index)=> (
                
                 
                 <MovieCard movie={item}/>
                 
            
            ))
         }
        
        < BsFillCaretRightFill size={32} className='hidden md:block absolute mx-8 mr-[22px]
        mt-[150px] cursor-pointer right-0' onClick={()=> sliderRight(elementRef.current)}   />
    </div>
   
     </div>
    
  
    
  )
}

export default MovieList

