import Axios from 'axios'

import disney from '../assets/disney.png'
import marvel from '../assets/marvel.png'
import  nationalG from '../assets/nationalG.png'
import  pixar from '../assets/pixar.png'
import starwar from '../assets/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeographic from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import  starV from '../assets/Videos/star-wars.mp4'



//https://api.themoviedb.org/3/movie/550?api_key=fc6ccae92614b83646d14280659d8c7e

const api_key = 'fc6ccae92614b83646d14280659d8c7e';
const movieBaseUrl = 'https://api.themoviedb.org/3';
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+api_key;

export const getTrendingVideo =  Axios.get(movieBaseUrl+'/trending/all/day?api_key='+api_key);
export const getMovieByGenreId=(id)=> Axios.get(movieByGenreBaseURL+"&with_genres="+id)


//const getTrendingVideos = Axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=fc6ccae92614b83646d14280659d8c7e')
//export default {getTrendingVideo}

// Production house list

export const Product_House_List = [
    {
        id : 1,
        image : disney,
        video : disneyV
    },
   
    {
        id : 2,
        image : marvel,
        video : marvelV
    },

    {
        id : 3,
        image : nationalG,
        video : nationalGeographic
    },

    {
        id : 4,
        image : pixar,
        video : pixarV
    },
    
    {
        id : 5,
        image : starwar,
        video : starV
    },
]

export const genere= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
