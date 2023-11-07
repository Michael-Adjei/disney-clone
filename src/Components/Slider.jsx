import React, {useEffect,useRef,useState}from 'react'
import {getTrendingVideo} from  '../extras/Api'
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'



const Slider = () => {
   const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
     const [movieList,setMovieList] = useState([]);
     const elementRef = useRef(0);
     const dimension = window.innerWidth;
    
useEffect(()=> {
       dataMovies();
    },[])

  
    const dataMovies = ()=>{
        getTrendingVideo.then((res)=>{
             setMovieList(res.data.results);
            
        })
    }

    const sliderRight=(element)=> {
      element.scrollLeft+= dimension - 110;
      console.log(element)
    }
  
    const sliderLeft=(element)=>{
      element.scrollLeft-= dimension - 110;
      console.log(element)
    }
    
  return (
    <div className='text-white w-full flex ' >
       <BsFillCaretLeftFill size={32} className='hidden md:block absolute mx-8 
       mt-[150px] cursor-pointer' onClick={()=> sliderLeft(elementRef.current)}  />
       
       < BsFillCaretRightFill size={32} className='hidden md:block absolute mx-8 mr-[22px]
        mt-[150px] cursor-pointer right-0' onClick={()=> sliderRight(elementRef.current)}   />
       
      <div className='w-full flex px-16 py-4 scroll-smooth 
      transition-transform duration-1000 overflow-x-auto scrollbar-none ' ref={elementRef}  >
          {
            movieList.map((item, index) => (
              <img  src={IMAGE_BASE_URL+item.backdrop_path} key={index} alt="movie posters" 
               className='min-w-full md:h-[410px] object-conatin
               mr-5 rounded-xl duration-300  
                hover:border-[4px] border-gray-400 shadow-xl transition-all ease-in-out' 
               />
            ))
          }
        </div>
    </div>
  )
}

export default Slider
