import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 text-[18px]
     font-semibold cursor-pointer hover:underline 
     underline-offset-8 hover:scale-110 duration-300 hover:text-gray-500 mb-2 '>
        <Icon />
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
