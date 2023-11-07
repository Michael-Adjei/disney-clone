import { Product_House_List } from "../extras/Api"
import '../App.css'


const ProductionHouse = () => {
    
  return (
    <div className='text-white flex gap-2 md:gap-5 p-2 px-5 md:px-16  '>
      {
        Product_House_List.map((item)=> (
            <div className='border-[2px] border-x-gray-600 rounded-xl relative
              hover:scale-110 transition-all ease-in-out duration-300 
              cursor-pointer shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop muted playsInline className='absolute
                top-0 rounded-lg z-0 opacity-0 hover:opacity-50'/>
                <img src={item.image} alt="product houses" className='w-full z-[1]' />
                
            </div>
        ))
      }
    </div>
  )
}

export default ProductionHouse
