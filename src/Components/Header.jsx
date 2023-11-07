import React,{useState} from 'react'
import logo from '../assets/disney_logo.png'
import { Menu } from '../extras/Menu'
import HeaderItem from './HeaderItem'
import avatar from '../assets/avatar.png'
import {HiDotsVertical} from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Header = () => {

    const [toggle, setToggle] = useState(false)
  return (
    <div className='flex items-center gap-8 justify-between p-5 w-full'>
        <div className='flex items-center gap-14'>
          <Link to='/'>
       <img src={logo} alt="logo" className='w-20 h-20 md:w-32 object-contain 
       hover:scale-110 duration-300' />
      </Link>
      <div className='hidden md:flex items-center justify-center gap-8'>
      {
            Menu.map((item, index) => (
                 <HeaderItem name={item.name}  Icon={item.icon} />
            ))
          }
      </div>
      
      <div className='flex items-center justify-center gap-10 md:hidden'>
      {
            Menu.map((item, index) => index < 3 &&(
                 <HeaderItem name={''} Icon={item.icon} />
            ))
          }
          <div className='text-white md:hidden' onClick={()=> setToggle(!toggle)}>
               <HeaderItem  name={''} Icon={HiDotsVertical}/>
               
               {
                toggle ? <div className='absolute mt-3 bg-[#121212] 
                border-[1px] p-3 border-gray-700 px-5 py-4'>
                {
                  Menu.map((item, index) => index > 2 &&(
                  <HeaderItem name={item.name} Icon={item.icon} />
 
             ))
                   
           }
                </div> : null
               }
               
          </div>
      </div>
      
     </div>
      <img src={avatar} alt="" className='w-[60px] rounded-full' />

    </div>
  )
}

export default Header
