
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Outlet} from "react-router-dom";
import Home from './Pages/Home';

import './App.css'

import Header from './Components/Header';
import Detail from './Components/Detail'

function App() {
  
 const LayOut = ()=> {
 return <>
     <Header/>,
     <Outlet/>
  </>
 }
   const router = createBrowserRouter(
   createRoutesFromElements( [
     <Route path='/' element={<LayOut/>}/>,
    <Route index element={<Home/> }/>,
    <Route path='/detail/:id' element={<Detail/>}/>
   
 
   ])
 )

  return (
    <div className='App bg-black w-screen h-screen'> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
